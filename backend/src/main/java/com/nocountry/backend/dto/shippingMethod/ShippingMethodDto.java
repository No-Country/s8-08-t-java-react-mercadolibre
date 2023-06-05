package com.nocountry.backend.dto.shippingMethod;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShippingMethodDto {

        private String id;
        @SerializedName("nombre")
        private String name;
        private double price;
    }