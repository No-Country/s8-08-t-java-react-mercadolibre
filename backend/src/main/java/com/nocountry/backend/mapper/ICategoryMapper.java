package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.category.CategoryDto;
import com.nocountry.backend.model.entity.Category;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.factory.Mappers;

import java.util.List;


@Mapper(componentModel = "spring", uses = {}, nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface ICategoryMapper {
    ICategoryMapper INSTANCE = Mappers.getMapper(ICategoryMapper.class);

    CategoryDto toCategoryDto(Category category);

    Category toCategory(CategoryDto DTO);

    List<CategoryDto> toCategoriesDTO(List<Category> category);

    List<Category> toCategories(List<CategoryDto> categoryDTO);
}
