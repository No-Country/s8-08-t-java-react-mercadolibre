package com.nocountry.backend.dto.province;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProvinceDto {
    private Integer id;
    @SerializedName("nombre")
    private String name;
    private String locality;
}
