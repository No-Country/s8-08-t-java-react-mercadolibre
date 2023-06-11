package com.nocountry.backend.dto.orderStatus;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderStatusDto {

    private String id;
    @SerializedName("estado")
    private String status;
}

