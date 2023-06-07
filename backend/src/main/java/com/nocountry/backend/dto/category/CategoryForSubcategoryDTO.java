package com.nocountry.backend.dto.category;

import com.nocountry.backend.dto.subcategory.SubcategoryDTO;
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
