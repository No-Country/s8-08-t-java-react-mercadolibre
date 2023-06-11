package com.nocountry.backend.dto.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLoginDto {
    @Schema(example = "user@meli.com")
    private String email;
    @Schema(example = "1234")
    private String password;
}
