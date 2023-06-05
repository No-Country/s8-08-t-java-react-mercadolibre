package com.nocountry.backend.dto.address;

import com.nocountry.backend.dto.province.ProvinceAddressDto;
import com.nocountry.backend.dto.province.ProvinceDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressListGetDto {
    private String contact;
    private String locality;
    private ProvinceAddressDto province;
    private String street;
    private String number;
}
