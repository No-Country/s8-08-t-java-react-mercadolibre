package com.nocountry.backend.controller;

import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.Preference;
import com.mercadopago.resources.datastructures.preference.BackUrls;
import com.mercadopago.resources.datastructures.preference.Item;
import com.nocountry.backend.dto.payment.MpPaymentDto;
import com.nocountry.backend.util.paypal.URLLocation;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//import javax.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/mercadopago")
public class MercadoPagoController {

    @PostMapping("/pay")
    public String createAndRecirect(HttpServletRequest req, @RequestBody MpPaymentDto mpPaymentDto) throws MPException {

        String FailureUrl = URLLocation.getBaseUrl(req) + "/api/v1/mercadopago/failure";
        String PendingUrl = URLLocation.getBaseUrl(req) + "/api/v1/mercadopago/pending";
        String SuccessUrl = URLLocation.getBaseUrl(req) + "/api/v1/mercadopago/success";

        Preference preference = new Preference();

        preference.setBackUrls(
                new BackUrls().setFailure(FailureUrl)
                        .setPending(PendingUrl)
                        .setSuccess(SuccessUrl)
        );

        Item item = new Item();
        item.setTitle(mpPaymentDto.getTitle())
                .setQuantity(mpPaymentDto.getQuantity())
                .setUnitPrice(mpPaymentDto.getPrice());

        preference.appendItem(item);

        Preference result = preference.save();

        System.out.println(result.getSandboxInitPoint());
        return "redirect:" + result.getSandboxInitPoint();
    }

    @GetMapping("/success")
    public ResponseEntity<?> success() throws MPException {
        return ResponseEntity.status(HttpStatus.OK)
                .body("Success");
    }

    @GetMapping("/failure")
    public ResponseEntity<?> failure() throws MPException {
        return ResponseEntity.status(HttpStatus.OK)
                .body("Failure");
    }

    @GetMapping("/pending")
    public ResponseEntity<?> pending() throws MPException {
        return ResponseEntity.status(HttpStatus.OK)
                .body("Pending");
    }
}
