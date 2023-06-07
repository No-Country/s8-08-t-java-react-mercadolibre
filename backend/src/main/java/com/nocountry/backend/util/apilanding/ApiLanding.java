package com.nocountry.backend.util.apilanding;

import com.google.gson.stream.MalformedJsonException;
import com.nocountry.backend.dto.apilading.ResponseDto;
import com.nocountry.backend.dto.location.LocalityResponse;
import feign.Headers;
import feign.QueryMap;
import feign.RequestLine;

import java.util.Map;

@Headers("Accept: application/json")
public interface ApiLanding {

    @RequestLine("GET /cpa")
    ResponseDto zipCodeProvince(@QueryMap Map<String, Object> queryMap);


}
