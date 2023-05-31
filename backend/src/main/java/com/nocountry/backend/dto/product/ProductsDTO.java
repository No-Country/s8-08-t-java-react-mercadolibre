package com.nocountry.backend.dto.product;

import com.nocountry.backend.dto.category.CategoryDto;
import com.nocountry.backend.dto.image.ImageDto;
import com.nocountry.backend.dto.orderItem.OrderItemListGetDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductsDTO {
    private String name;
    private double price;
    private Integer stock;
    private String description;
    private CategoryDto category;
    private List<ImageDto> images;
    private List<OrderItemListGetDto> orders;
}
