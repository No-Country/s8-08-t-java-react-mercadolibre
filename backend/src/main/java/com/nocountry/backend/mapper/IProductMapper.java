package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.description.DescriptionDto;
import com.nocountry.backend.dto.product.ProductDetailGetDto;
import com.nocountry.backend.dto.product.ProductDto;
import com.nocountry.backend.dto.product.ProductListGetDto;

import com.nocountry.backend.model.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = {IUserMapper.class, ICategoryMapper.class, IImageMapper.class, IOrderItemMapper.class}, nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface IProductMapper {
    IProductMapper INSTANCE = Mappers.getMapper(IProductMapper.class);

    ProductDto toProductDto(Product product);

    Product toProduct(ProductDto DTO);

    List<ProductListGetDto> toProductListGetDto(List<Product> product);

    @Mappings({
            @Mapping(target = "descriptionGeneric", ignore = true),
            @Mapping(target = "descriptionRelevant", ignore = true)
    }
    )
    ProductDetailGetDto toProductDetailGetDto(Product product);


    List<ProductDto> toProductsDTO(List<Product> products);

    List<Product> toProducts(List<ProductDto> ProductsDTO);

}
