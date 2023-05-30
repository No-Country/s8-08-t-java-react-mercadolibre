package com.nocountry.backend.dto.order;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.SerializedName;
import com.nocountry.backend.dto.address.AddressDetailPostDto;
import com.nocountry.backend.dto.orderStatus.OrderStatusDto;
import com.nocountry.backend.dto.shippingMethod.ShippingMethodDto;

import java.util.Date;

public class OrderDetailPostDto {
    @JsonProperty("order_id")
    private  Long id;
    @SerializedName("Date")
    @JsonProperty("date")
    private Date date;
    private AddressDetailPostDto shippingAddress;
    @JsonProperty("order_total")
    private double orderTotal;
    private ShippingMethodDto shippingMethod;
    private OrderStatusDto orderStatus;
}

