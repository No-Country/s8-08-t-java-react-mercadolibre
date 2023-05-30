package com.nocountry.backend.dto.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductsDTO {
    private String name;
    private double price;
    private Integer stock;
    private String description;
}
