package com.nocountry.backend.dto.province;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ProvinceResponse {
    @SerializedName("provincias")
    private List<ProvinceDto> provinces;




}
