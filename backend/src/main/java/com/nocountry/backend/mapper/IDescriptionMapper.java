package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.description.DescriptionDto;
import com.nocountry.backend.model.entity.Description;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface IDescriptionMapper {

    DescriptionDto toDescriptionDto(Description description);

    List<DescriptionDto> toDescriptionDtos(List<Description> descriptions);
}
