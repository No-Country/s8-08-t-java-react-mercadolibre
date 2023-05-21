package com.nocountry.backend.dto.location;

import com.google.gson.annotations.SerializedName;
import lombok.*;

@Getter
@Setter
public class LocalityDto {

    private String id;

    @SerializedName("nombre")
    private String name;
}
