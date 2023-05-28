package com.nocountry.backend.util.apilanding.impl;

import com.google.gson.stream.MalformedJsonException;
import com.nocountry.backend.dto.apilading.ResponseDto;
import com.nocountry.backend.exception.ZipCodeNotValidException;
import com.nocountry.backend.service.impl.ProvinceServiceImpl;
import com.nocountry.backend.util.APIFunctions;
import com.nocountry.backend.util.apilanding.ApiLanding;
import com.nocountry.backend.util.apilanding.IApiLandingExecute;
import com.nocountry.backend.util.properties.ApiLandingProperties;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class ApiLandingExecuteImpl implements IApiLandingExecute {
    Logger logger = LoggerFactory.getLogger(ApiLandingExecuteImpl.class);

    private final ApiLandingProperties apiLanding;


    private ApiLanding buildApiLanding() {
        return APIFunctions.buildAPI(ApiLanding.class, apiLanding.getUrl());
    }

    private Map<String, Object> params(String zipCode) {
        Map<String, Object> params = new HashMap<>();
        params.put("token-susc", apiLanding.getTokenSusc());
        params.put("token-api", apiLanding.getTokenApi());
        params.put("cpa", zipCode);
        return params;
    }

    @Override
    public ResponseDto executeValidZipCode(String zipCode) {
        ResponseDto responseDto = this.buildApiLanding()
                .zipCodeProvince(this.params(zipCode));
        if (responseDto.getState() < 1) {
            throw new ZipCodeNotValidException("No existe una provincia con el codigo ingresado.");
        }
        return responseDto;
    }
}
