package com.nocountry.backend.dto.product;

import com.nocountry.backend.dto.orderItem.OrderItemDto;
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
    private CategoryDTO category;
    private List<ImageDTO> images;
    private List<OrderItemDto> orders;
}
