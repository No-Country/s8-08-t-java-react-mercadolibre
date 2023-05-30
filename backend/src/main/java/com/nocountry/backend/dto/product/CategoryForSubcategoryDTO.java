package com.nocountry.backend.dto.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CategoryForSubcategoryDTO {
    private Integer id;
    private String name;
    private List<SubcategoryDTO> subcategories;
}
