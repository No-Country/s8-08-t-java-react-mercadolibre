package com.nocountry.backend.controller;

import com.nocountry.backend.dto.payment.PaymentDto;
import com.nocountry.backend.util.paypal.URLLocation;
import com.paypal.api.payments.*;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;

@RestController
@RequestMapping("/api/v1/paypal")
@RequiredArgsConstructor
public class PaypalController {
    private final APIContext apiContext;

    @PostMapping("/pay")
    public ResponseEntity<?> paypalPay(HttpServletRequest req, @RequestBody PaymentDto paymentDto) {

        Amount amount = new Amount();
        amount.setCurrency(paymentDto.getCurrency());
        double price = new BigDecimal(paymentDto.getPrice()).setScale(2, RoundingMode.HALF_UP).doubleValue();
        amount.setTotal(String.format("%.2f", price));

        Transaction transaction = new Transaction();
        transaction.setAmount(amount);
        transaction.setDescription(paymentDto.getDescription());
        List<Transaction> transactions = new ArrayList<Transaction>();
        transactions.add(transaction);

        Payer payer = new Payer();
        payer.setPaymentMethod("paypal");

        Payment payment = new Payment();
        payment.setIntent("sale");
        payment.setPayer(payer);
        payment.setTransactions(transactions);

        RedirectUrls redirectUrls = new RedirectUrls();
        String guid = UUID.randomUUID().toString().replaceAll("-", "");
        redirectUrls.setCancelUrl(URLLocation.getBaseUrl(req) + "/api/v1/paypal/payment/cancel?guid=" + guid);
        redirectUrls.setReturnUrl(URLLocation.getBaseUrl(req) + "/api/v1/paypal/payment/success?guid=" + guid);
        payment.setRedirectUrls(redirectUrls);

        try {
            String requestId = UUID.randomUUID().toString();
            Map<String, String> payReq = new HashMap<>();
            payReq.put("PayPal-Request-Id", requestId);
            apiContext.setHTTPHeaders(payReq);

            Payment createdPayment = payment.create(apiContext);

            Iterator<Links> links = createdPayment.getLinks().iterator();
            while (links.hasNext()) {
                Links link = links.next();
                if (link.getRel().equalsIgnoreCase("approval_url")) {
                    return ResponseEntity.status(HttpStatus.OK).header("redirect",link.getHref())
                            .body("redirect:" + link.getHref());
                }
            }
        } catch (PayPalRESTException e) {
            System.err.println(e.getDetails());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @GetMapping("/payment/success")
    @ResponseBody
    public ResponseEntity<?> executePayment(HttpServletRequest req) {
        String requestId = req.getParameter("requestId");

        Payment payment = new Payment();
        payment.setId(req.getParameter("paymentId"));

        PaymentExecution paymentExecution = new PaymentExecution();
        paymentExecution.setPayerId(req.getParameter("PayerID"));
        try {
            Payment createdPayment = payment.execute(apiContext, paymentExecution);
            System.out.println(createdPayment);
            return ResponseEntity.status(HttpStatus.OK).body("Success");
        } catch (PayPalRESTException e) {
            System.err.println(e.getDetails());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed");
        }
    }

    @GetMapping("/payment/cancel")
    @ResponseBody
    public ResponseEntity<?> cancelPayment() {
        return ResponseEntity.status(HttpStatus.OK)
                .body("Payment cancelled");
    }
}
