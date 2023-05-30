package com.nocountry.backend.dto.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SubcategoryDTO {
    private Integer id;
    private String name;
    private int ProductCount;
}
