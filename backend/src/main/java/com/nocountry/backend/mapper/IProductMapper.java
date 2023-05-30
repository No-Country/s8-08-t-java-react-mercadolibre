package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.product.ProductDTO;
import com.nocountry.backend.dto.product.ProductListGetDto;

import com.nocountry.backend.model.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = { IUserMapper.class, ICategoryMapper.class, IImageMapper.class,IOrderItemMapper.class}, nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface IProductMapper {
    IProductMapper INSTANCE = Mappers.getMapper(IProductMapper.class);
    ProductDTO toProductDto(Product product);

    Product toProduct(ProductDTO DTO);
    List<ProductListGetDto> toProductListGetDto(List<Product> product);

    List<ProductDTO> toProductsDTO(List<Product> products);

    List<Product> toProducts(List<ProductDTO> ProductsDTO);

}
