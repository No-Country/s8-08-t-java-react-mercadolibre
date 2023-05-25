package com.nocountry.backend.controller;


import com.nocountry.backend.dto.payment.PaymentDto;
import com.nocountry.backend.util.paypal.URLLocation;
import com.paypal.api.payments.*;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/paypal")
@RequiredArgsConstructor
public class PaypalController {
    private final APIContext apiContext;

    @PostMapping("/pay")
    public String paypalPay(jakarta.servlet.http.HttpServletRequest req, @RequestBody PaymentDto paymentDto) {

        // Payment amount - setCurrency - USD
        Amount amount = new Amount();
        amount.setCurrency(paymentDto.getCurrency());
        // setTotal - price
        double price = new BigDecimal(paymentDto.getPrice()).setScale(2, RoundingMode.HALF_UP).doubleValue();
        amount.setTotal(String.format("%.2f", price));

        // Transaction information
        Transaction transaction = new Transaction();
        transaction.setAmount(amount);
        transaction.setDescription(paymentDto.getDescription());

        // The Payment creation API requires a list of Transaction
        List<Transaction> transactions = new ArrayList<Transaction>();
        transactions.add(transaction);

        // Payment Method as 'paypal'
        Payer payer = new Payer();
        payer.setPaymentMethod("paypal");

        // Add payment details
        Payment payment = new Payment();
        payment.setIntent("sale");
        payment.setPayer(payer);
        payment.setTransactions(transactions);

        // ###Redirect URLs
        RedirectUrls redirectUrls = new RedirectUrls();
        String guid = UUID.randomUUID().toString().replaceAll("-", ""); // add the order/user id as a param.
        // Payment cancellation url
        redirectUrls.setCancelUrl(URLLocation.getBaseUrl(req) + "/paypal/payment/cancel?guid=" + guid);
        // Payment success url
        redirectUrls.setReturnUrl(URLLocation.getBaseUrl(req) + "/paypal/payment/success?guid=" + guid);
        payment.setRedirectUrls(redirectUrls);

        // Create payment
        try {
            Payment createdPayment = payment.create(apiContext);

            // ###Payment Approval Url
            Iterator<Links> links = createdPayment.getLinks().iterator();
            while (links.hasNext()) {
                Links link = links.next();
                if (link.getRel().equalsIgnoreCase("approval_url")) {
                    // redirecting to paypal site for handling payment
                    return "redirect:" + link.getHref();
                }
            }
        } catch (PayPalRESTException e) {
            System.err.println(e.getDetails());
            return "redirect:/paypal/error";
        }
        return "redirect:/paypal/error";
    }

    @GetMapping("/payment/success")
    @ResponseBody
    public String executePayment(HttpServletRequest req) {
        Payment payment = new Payment();
        payment.setId(req.getParameter("paymentId"));

        PaymentExecution paymentExecution = new PaymentExecution();
        paymentExecution.setPayerId(req.getParameter("PayerID"));
        try {
            Payment createdPayment = payment.execute(apiContext, paymentExecution);
            System.out.println(createdPayment);
            return "Success";
        } catch (PayPalRESTException e) {
            System.err.println(e.getDetails());
            return "Failed";
        }
    }

    @GetMapping("/payment/cancel")
    @ResponseBody
    public String cancelPayment() {
        return "Payment cancelled";
    }
}
