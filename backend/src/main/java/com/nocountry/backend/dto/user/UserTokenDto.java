package com.nocountry.backend.dto.user;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserTokenDto {
    private UserDto user;
    private String token;
}
