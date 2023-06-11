package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.product.ProductDetailGetDto;
import com.nocountry.backend.model.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)

public interface IProductDetailMapper {

    @Mappings({
            @Mapping(target = "descriptionGeneric", ignore = true),
            @Mapping(target = "descriptionRelevant", ignore = true),
            @Mapping(target = "colors", source = "productJoined")

    }
    )
    ProductDetailGetDto toProductDetailGetDto(Product product);


}
