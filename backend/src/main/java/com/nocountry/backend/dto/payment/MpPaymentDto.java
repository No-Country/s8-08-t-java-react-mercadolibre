package com.nocountry.backend.dto.payment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MpPaymentDto {

    private String title;
    private Integer quantity;
    private float price;

}