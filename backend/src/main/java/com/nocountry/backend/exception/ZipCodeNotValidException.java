package com.nocountry.backend.exception;

public class ZipCodeNotValidException extends RuntimeException {

    public ZipCodeNotValidException(String message) {
        super(message);
    }

}
