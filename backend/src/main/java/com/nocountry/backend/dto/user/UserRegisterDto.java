package com.nocountry.backend.dto.user;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegisterDto {

    private String email;
    private String firstName;
    private String lastName;
    private String numberPhone;
    private String password;
}
