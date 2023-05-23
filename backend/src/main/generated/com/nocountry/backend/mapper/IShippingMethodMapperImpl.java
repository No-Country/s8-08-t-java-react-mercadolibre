package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.shippingMethod.ShippingMethodDto;
import com.nocountry.backend.model.entity.ShippingMethod;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-23T13:42:08-0500",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.4.1 (Eclipse Adoptium)"
)
@Component
public class IShippingMethodMapperImpl implements IShippingMethodMapper {

    @Override
    public ShippingMethodDto toShippingMethodDto(ShippingMethod shippingMethod) {
        if ( shippingMethod == null ) {
            return null;
        }

        ShippingMethodDto shippingMethodDto = new ShippingMethodDto();

        shippingMethodDto.setId( String.valueOf( shippingMethod.getId() ) );
        shippingMethodDto.setName( shippingMethod.getName() );
        shippingMethodDto.setPrice( shippingMethod.getPrice() );

        return shippingMethodDto;
    }

    @Override
    public ShippingMethod toShippingMethod(ShippingMethodDto DTO) {
        if ( DTO == null ) {
            return null;
        }

        ShippingMethod.ShippingMethodBuilder shippingMethod = ShippingMethod.builder();

        if ( DTO.getId() != null ) {
            shippingMethod.id( Integer.parseInt( DTO.getId() ) );
        }
        shippingMethod.name( DTO.getName() );
        shippingMethod.price( DTO.getPrice() );

        return shippingMethod.build();
    }

    @Override
    public List<ShippingMethodDto> toShippingMethodsDTO(List<ShippingMethod> shippingMethod) {
        if ( shippingMethod == null ) {
            return null;
        }

        List<ShippingMethodDto> list = new ArrayList<ShippingMethodDto>( shippingMethod.size() );
        for ( ShippingMethod shippingMethod1 : shippingMethod ) {
            list.add( toShippingMethodDto( shippingMethod1 ) );
        }

        return list;
    }

    @Override
    public List<ShippingMethod> toShippingMethods(List<ShippingMethodDto> ShippingMethodsDTO) {
        if ( ShippingMethodsDTO == null ) {
            return null;
        }

        List<ShippingMethod> list = new ArrayList<ShippingMethod>( ShippingMethodsDTO.size() );
        for ( ShippingMethodDto shippingMethodDto : ShippingMethodsDTO ) {
            list.add( toShippingMethod( shippingMethodDto ) );
        }

        return list;
    }
}
