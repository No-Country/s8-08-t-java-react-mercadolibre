package com.nocountry.backend.dto.user;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Reservations must have a one-hour gap between each other.")

public class UserRegisterDto {

    @Schema(example = "test@meli.com")
    private String email;
    @Schema(example = "Test")
    private String firstName;
    @Schema(example = "TestApellido")
    private String lastName;
    @Schema(example = "+573245678900")
    private String numberPhone;
    @Schema(example = "1234")
    private String password;
}
