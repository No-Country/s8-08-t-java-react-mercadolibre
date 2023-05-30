package com.nocountry.backend.service;

import com.nocountry.backend.dto.product.ProductListGetDto;

import java.util.List;

public interface IProductService {


    List<ProductListGetDto> findAllProduct();

}
