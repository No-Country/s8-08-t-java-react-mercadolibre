package com.nocountry.backend.dto.product;

import com.nocountry.backend.dto.category.CategoryDto;
import com.nocountry.backend.dto.color.ColorDto;
import com.nocountry.backend.dto.description.DescriptionDto;
import com.nocountry.backend.dto.image.ImageDto;
import com.nocountry.backend.dto.subcategory.SubcategoryGetProductDetailDto;
import com.nocountry.backend.model.entity.Color;
import com.nocountry.backend.model.entity.Image;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ProductDetailGetDto {

    private Integer id;
    private String title;
    private Double price;
    private Integer numberQuotas;
    private Double priceQuotas;
    private Integer discount;
    private Double priceDiscount;
    private List<ImageDto> images;
    private List<DescriptionDto> descriptionGeneric;
    private List<DescriptionDto> descriptionRelevant;
    private List<ColorDto> colors;
    private CategoryDto category;
    private SubcategoryGetProductDetailDto subcategory;


}
