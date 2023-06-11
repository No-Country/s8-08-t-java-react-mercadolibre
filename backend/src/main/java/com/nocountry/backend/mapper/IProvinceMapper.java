package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.province.ProvinceDto;
import com.nocountry.backend.model.entity.Province;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface IProvinceMapper {


    ProvinceDto toProvinceDto(Province province);


    @InheritInverseConfiguration
    @Mapping(target = "addresses", ignore = true)
    Province toProvince(ProvinceDto provinceDto);


}
