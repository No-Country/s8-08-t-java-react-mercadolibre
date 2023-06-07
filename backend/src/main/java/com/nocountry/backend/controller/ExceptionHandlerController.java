package com.nocountry.backend.controller;

import com.nocountry.backend.dto.exeption.ExceptionDto;
import com.nocountry.backend.exception.ZipCodeNotValidException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Date;

@ControllerAdvice
public class ExceptionHandlerController {

    @ExceptionHandler(value = {AuthenticationException.class})
    public ResponseEntity<Object> handleApiRequestCredentialException(HttpServletRequest request, AuthenticationException apiRequestException) {
        HttpStatus unauthorized = HttpStatus.UNAUTHORIZED;
        ExceptionDto exceptionDto = new ExceptionDto(apiRequestException.getMessage(),
                unauthorized,
                unauthorized.value(),
                request.getRequestURL().toString(),
                new Date());
        return new ResponseEntity<>(exceptionDto, unauthorized);
    }


    @ExceptionHandler(value = {ZipCodeNotValidException.class})
    public ResponseEntity<Object> handleApiRequestZipCode(HttpServletRequest request, ZipCodeNotValidException apiRequestException) {
        HttpStatus unauthorized = HttpStatus.NOT_FOUND;
        ExceptionDto exceptionDto = new ExceptionDto(apiRequestException.getMessage(),
                unauthorized,
                unauthorized.value(),
                request.getRequestURL().toString(),
                new Date());
        return new ResponseEntity<>(exceptionDto, unauthorized);
    }
}
