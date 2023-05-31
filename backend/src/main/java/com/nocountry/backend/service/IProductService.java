package com.nocountry.backend.service;

import com.nocountry.backend.dto.product.ProductDetailGetDto;
import com.nocountry.backend.dto.product.ProductDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.Product;
import com.nocountry.backend.dto.product.ProductListGetDto;

import java.util.List;

public interface IProductService {
    List<ProductDto> getAll();

    ProductDto getById(int id) throws ResourceNotFoundException;

    ProductDto post(Product product);

    ProductDto patch(int id, Product product) throws ResourceNotFoundException;

    ProductDto delete(int id) throws ResourceNotFoundException;

    List<ProductDto> getByUser(int id);


    List<ProductListGetDto> findAllProduct();

    ProductDetailGetDto findProductById(Integer productId);

}
