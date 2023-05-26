package com.nocountry.backend.service;

import com.nocountry.backend.dto.product.ProductDTO;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.Product;

import java.util.List;

public interface IProductService {
    List<ProductDTO> getAll();
    ProductDTO getById(int id) throws ResourceNotFoundException;

    ProductDTO post(Product product);

    ProductDTO patch(int id,Product product) throws ResourceNotFoundException;

    ProductDTO delete(int id) throws ResourceNotFoundException;

    List<ProductDTO> getByUser(int id);

}
