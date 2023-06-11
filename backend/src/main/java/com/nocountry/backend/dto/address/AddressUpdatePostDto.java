package com.nocountry.backend.dto.address;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressUpdatePostDto {
    private String contact;
    @JsonProperty("zip_code")
    private String zipCode;
    @JsonProperty("province_id")
    private Integer provinceId;
    private String locality;
    private String street;
    private String number;
    @JsonProperty("floor_apartment")
    private String floorApartment;
    @JsonProperty("num_street_init")
    private String numStreetInit;
    @JsonProperty("num_street_end")
    private String numStreetEnd;
    private Boolean residential;
    private String phone;
    private String comment;
}
