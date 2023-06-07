package com.nocountry.backend.util.properties;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Getter
@Setter
@ConfigurationProperties(prefix = "config.api.paypal")
@Configuration()
public class PaypalProperties {

    private String secret;
    private String client;
    private String mode;
}
