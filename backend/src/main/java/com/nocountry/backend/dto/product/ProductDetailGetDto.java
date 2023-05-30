package com.nocountry.backend.dto.product;

import com.nocountry.backend.model.entity.Image;

import java.util.List;

public class ProductDetailGetDto {

    private Integer id;
    private String name;
    private Double price;
    private Integer stock;
    private String description;
    private List<Image> images;
}
