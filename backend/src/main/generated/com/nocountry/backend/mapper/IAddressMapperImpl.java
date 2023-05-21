package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.address.AddressDetailPostDto;
import com.nocountry.backend.dto.address.AddressListGetDto;
import com.nocountry.backend.dto.address.AddressPostDto;
import com.nocountry.backend.dto.address.AddressUpdatePostDto;
import com.nocountry.backend.dto.province.ProvinceDto;
import com.nocountry.backend.model.entity.Address;
import com.nocountry.backend.model.entity.Province;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-21T01:27:09-0500",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.4.1 (Eclipse Adoptium)"
)
@Component
public class IAddressMapperImpl implements IAddressMapper {

    @Override
    public AddressPostDto toAddressDto(Address address) {
        if ( address == null ) {
            return null;
        }

        AddressPostDto addressPostDto = new AddressPostDto();

        addressPostDto.setProvinceId( address.getProvinceFk() );
        addressPostDto.setUserId( address.getUserFk() );
        addressPostDto.setContact( address.getContact() );
        addressPostDto.setZipCode( address.getZipCode() );
        addressPostDto.setLocality( address.getLocality() );
        addressPostDto.setStreet( address.getStreet() );
        addressPostDto.setNumber( address.getNumber() );
        addressPostDto.setFloorApartment( address.getFloorApartment() );
        addressPostDto.setNumStreetInit( address.getNumStreetInit() );
        addressPostDto.setNumStreetEnd( address.getNumStreetEnd() );
        addressPostDto.setStatus( address.getStatus() );
        addressPostDto.setResidential( address.getResidential() );
        addressPostDto.setPhone( address.getPhone() );
        addressPostDto.setComment( address.getComment() );

        return addressPostDto;
    }

    @Override
    public AddressDetailPostDto toAddressDetailPostDto(Address address) {
        if ( address == null ) {
            return null;
        }

        AddressDetailPostDto addressDetailPostDto = new AddressDetailPostDto();

        addressDetailPostDto.setContact( address.getContact() );
        addressDetailPostDto.setZipCode( address.getZipCode() );
        addressDetailPostDto.setProvince( provinceToProvinceDto( address.getProvince() ) );
        addressDetailPostDto.setLocality( address.getLocality() );
        addressDetailPostDto.setStreet( address.getStreet() );
        addressDetailPostDto.setNumber( address.getNumber() );
        addressDetailPostDto.setFloorApartment( address.getFloorApartment() );
        addressDetailPostDto.setNumStreetInit( address.getNumStreetInit() );
        addressDetailPostDto.setNumStreetEnd( address.getNumStreetEnd() );
        addressDetailPostDto.setStatus( address.getStatus() );
        addressDetailPostDto.setResidential( address.getResidential() );
        addressDetailPostDto.setPhone( address.getPhone() );
        addressDetailPostDto.setComment( address.getComment() );

        return addressDetailPostDto;
    }

    @Override
    public List<AddressListGetDto> toAddressListGetDtos(List<Address> addresses) {
        if ( addresses == null ) {
            return null;
        }

        List<AddressListGetDto> list = new ArrayList<AddressListGetDto>( addresses.size() );
        for ( Address address : addresses ) {
            list.add( toAddressListGetDto( address ) );
        }

        return list;
    }

    @Override
    public AddressListGetDto toAddressListGetDto(Address address) {
        if ( address == null ) {
            return null;
        }

        AddressListGetDto addressListGetDto = new AddressListGetDto();

        addressListGetDto.setContact( address.getContact() );
        addressListGetDto.setProvince( provinceToProvinceDto( address.getProvince() ) );
        addressListGetDto.setStreet( address.getStreet() );
        addressListGetDto.setNumber( address.getNumber() );

        return addressListGetDto;
    }

    @Override
    public void updateAddress(AddressUpdatePostDto addressUpdatePostDto, Address address) {
        if ( addressUpdatePostDto == null ) {
            return;
        }

        if ( addressUpdatePostDto.getProvinceId() != null ) {
            address.setProvinceFk( addressUpdatePostDto.getProvinceId() );
        }
        if ( addressUpdatePostDto.getContact() != null ) {
            address.setContact( addressUpdatePostDto.getContact() );
        }
        if ( addressUpdatePostDto.getZipCode() != null ) {
            address.setZipCode( addressUpdatePostDto.getZipCode() );
        }
        if ( addressUpdatePostDto.getLocality() != null ) {
            address.setLocality( addressUpdatePostDto.getLocality() );
        }
        if ( addressUpdatePostDto.getStreet() != null ) {
            address.setStreet( addressUpdatePostDto.getStreet() );
        }
        if ( addressUpdatePostDto.getNumber() != null ) {
            address.setNumber( addressUpdatePostDto.getNumber() );
        }
        if ( addressUpdatePostDto.getFloorApartment() != null ) {
            address.setFloorApartment( addressUpdatePostDto.getFloorApartment() );
        }
        if ( addressUpdatePostDto.getNumStreetInit() != null ) {
            address.setNumStreetInit( addressUpdatePostDto.getNumStreetInit() );
        }
        if ( addressUpdatePostDto.getNumStreetEnd() != null ) {
            address.setNumStreetEnd( addressUpdatePostDto.getNumStreetEnd() );
        }
        if ( addressUpdatePostDto.getPhone() != null ) {
            address.setPhone( addressUpdatePostDto.getPhone() );
        }
        if ( addressUpdatePostDto.getComment() != null ) {
            address.setComment( addressUpdatePostDto.getComment() );
        }
        if ( addressUpdatePostDto.getResidential() != null ) {
            address.setResidential( addressUpdatePostDto.getResidential() );
        }
    }

    @Override
    public Address toAddress(AddressPostDto addressPostDto) {
        if ( addressPostDto == null ) {
            return null;
        }

        Address address = new Address();

        address.setProvinceFk( addressPostDto.getProvinceId() );
        address.setUserFk( addressPostDto.getUserId() );
        address.setContact( addressPostDto.getContact() );
        address.setZipCode( addressPostDto.getZipCode() );
        address.setLocality( addressPostDto.getLocality() );
        address.setStreet( addressPostDto.getStreet() );
        address.setNumber( addressPostDto.getNumber() );
        address.setFloorApartment( addressPostDto.getFloorApartment() );
        address.setNumStreetInit( addressPostDto.getNumStreetInit() );
        address.setNumStreetEnd( addressPostDto.getNumStreetEnd() );
        address.setStatus( addressPostDto.getStatus() );
        address.setPhone( addressPostDto.getPhone() );
        address.setComment( addressPostDto.getComment() );
        address.setResidential( addressPostDto.getResidential() );

        return address;
    }

    protected ProvinceDto provinceToProvinceDto(Province province) {
        if ( province == null ) {
            return null;
        }

        ProvinceDto provinceDto = new ProvinceDto();

        provinceDto.setId( province.getId() );
        provinceDto.setName( province.getName() );

        return provinceDto;
    }
}
