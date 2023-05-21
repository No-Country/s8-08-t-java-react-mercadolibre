package com.nocountry.backend.dto.address;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nocountry.backend.dto.province.ProvinceDto;
import com.nocountry.backend.dto.user.UserDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressDetailPostDto {

    //    private UserDto user;
    private String contact;
    @JsonProperty("zip_code")
    private String zipCode;
    private ProvinceDto province;
    private String locality;
    private String street;
    private String number;
    @JsonProperty("floor_apartment")
    private String floorApartment;
    @JsonProperty("num_street_init")
    private String numStreetInit;
    @JsonProperty("num_street_end")
    private String numStreetEnd;
    private Boolean status;
    private Boolean residential;
    private String phone;
    private String comment;
}
