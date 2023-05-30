package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.product.ProductListGetDto;
import com.nocountry.backend.mapper.IProductMapper;
import com.nocountry.backend.repository.IProductRepository;
import com.nocountry.backend.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {

    private final IProductRepository productRepository;
    private final IProductMapper productMapper;

    @Override
    public List<ProductListGetDto> findAllProduct() {


        return this.productMapper.toProductListGetDto(
                this.productRepository.findAll().stream().peek(
                        product -> product.setPriceQuotas(product.getPrice() / product.getNumberQuotas())
                ).toList()
        );
    }
}
