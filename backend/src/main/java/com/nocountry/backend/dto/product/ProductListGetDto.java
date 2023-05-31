package com.nocountry.backend.dto.product;


import com.nocountry.backend.dto.image.ImageDto;
import lombok.Getter;
import lombok.Setter;


import java.util.List;

@Getter
@Setter
public class ProductListGetDto {


    private Integer id;
    private String title;
    private Double price;
    private Integer numberQuotas;
    private Double priceQuotas;
    private Integer discount;
    private Double priceDiscount;
    private List<ImageDto> images;

}
