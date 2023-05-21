package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.province.ProvinceDto;
import com.nocountry.backend.model.entity.Province;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-21T01:27:09-0500",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.4.1 (Eclipse Adoptium)"
)
@Component
public class IProvinceMapperImpl implements IProvinceMapper {

    @Override
    public ProvinceDto toProvinceDto(Province province) {
        if ( province == null ) {
            return null;
        }

        ProvinceDto provinceDto = new ProvinceDto();

        provinceDto.setId( province.getId() );
        provinceDto.setName( province.getName() );

        return provinceDto;
    }

    @Override
    public Province toProvince(ProvinceDto provinceDto) {
        if ( provinceDto == null ) {
            return null;
        }

        Province province = new Province();

        province.setId( provinceDto.getId() );
        province.setName( provinceDto.getName() );

        return province;
    }
}
