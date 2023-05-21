package com.nocountry.backend.dto.province;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProvinceDto {
    private String id;
    @SerializedName("nombre")
    private String name;
}
