package com.nocountry.backend.controller;

import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.Preference;
import com.mercadopago.resources.datastructures.preference.BackUrls;
import com.mercadopago.resources.datastructures.preference.Item;
import com.nocountry.backend.dto.payment.MpPaymentDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping()
public class MercadoPagoController {

    @PostMapping("/api/v1/mercadopago/pay")
    public String createAndRecirect(HttpServletRequest req, @RequestBody MpPaymentDto mpPaymentDto) throws MPException {

        String FEUrl = "https://mercadolibre-s8-08.netlify.app/";

        Preference preference = new Preference();

        preference.setBackUrls(
                new BackUrls().setFailure(FEUrl)
                        .setPending(FEUrl)
                        .setSuccess(FEUrl)
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

//
//    @GetMapping("/api/v1/mercadopago/failure")
//    public ResponseEntity<?> failure() throws MPException {
//        return ResponseEntity.status(HttpStatus.OK)
//                .body("El pago ha sido rechazado o no finalizó correctamente");
//    }
}