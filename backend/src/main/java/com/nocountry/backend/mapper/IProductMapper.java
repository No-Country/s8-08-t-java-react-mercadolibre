package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.product.ProductListGetDto;
import com.nocountry.backend.model.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface IProductMapper {

    List<ProductListGetDto> toProductListGetDto(List<Product> product);


}
