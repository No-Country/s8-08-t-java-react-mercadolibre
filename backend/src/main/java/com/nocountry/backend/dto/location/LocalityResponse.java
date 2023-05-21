package com.nocountry.backend.dto.location;

import com.google.gson.annotations.SerializedName;
import lombok.*;

import java.util.List;

@Getter
@Setter
public class LocalityResponse {

    @SerializedName("localidades")
    private List<LocalityDto> locations;

    private Integer total;
}
