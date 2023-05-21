package com.nocountry.backend.util.apilanding;

import com.google.gson.stream.MalformedJsonException;
import com.nocountry.backend.dto.apilading.ResponseDto;

public interface IApiLandingExecute {

    ResponseDto executeValidZipCode(String zipCode);


}
