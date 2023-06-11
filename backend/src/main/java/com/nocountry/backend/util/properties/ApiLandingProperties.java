package com.nocountry.backend.util.properties;


import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Getter
@Setter
@ConfigurationProperties(prefix = "external.api.apilanding")
@Configuration()
public class ApiLandingProperties {

    private String url;
    private String tokenSusc;
    private String tokenApi;
}
