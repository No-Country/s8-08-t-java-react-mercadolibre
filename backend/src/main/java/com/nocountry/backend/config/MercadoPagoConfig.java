package com.nocountry.backend.config;

import com.mercadopago.MercadoPago;
import com.mercadopago.exceptions.MPConfException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MercadoPagoConfig {

    @Value("${mercadopago.accessToken}")
    private String accessToken;

    @Bean
    public void initializeMercadoPagoSDK() throws MPConfException {
        MercadoPago.SDK.setAccessToken(accessToken);
    }

}

