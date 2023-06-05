package com.nocountry.backend.dto.address;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
//@ToString
public class AddressPostDto {

    @JsonProperty("user_id")
    private Long userId;
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
    private Boolean status;
    private Boolean residential;
    private String phone;
    private String comment;


}
