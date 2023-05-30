package com.nocountry.backend.dto.order;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.SerializedName;
import com.nocountry.backend.dto.address.AddressDetailPostDto;
import com.nocountry.backend.dto.orderStatus.OrderStatusDto;
import com.nocountry.backend.dto.shippingMethod.ShippingMethodDto;
import com.nocountry.backend.dto.user.UserDto;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;


@Getter
@Setter
public class OrderListGetDto {

    @JsonProperty("order_id")
    private  Long id;

    @SerializedName("Date")
    private Date date;
    private UserDto user;
    private AddressDetailPostDto shippingAddress;

    @JsonProperty("order_total")
    private double orderTotal;
    private ShippingMethodDto shippingMethod;
    private OrderStatusDto orderStatus;

}
