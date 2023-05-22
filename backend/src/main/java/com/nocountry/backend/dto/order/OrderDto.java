package com.nocountry.backend.dto.order;

import com.google.gson.annotations.SerializedName;
import com.nocountry.backend.dto.orderStatus.OrderStatusDto;
import com.nocountry.backend.dto.shippingMethod.ShippingMethodDto;
import lombok.*;
import  com.nocountry.backend.dto.user.UserDto;
import java.util.Date;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {

    private int id;
    @SerializedName("fecha")
    private Date date;

    private UserDto user;
  //  private AdrressDto shippingAddress;
    private double orderTotal;
    private ShippingMethodDto shippingMethod;
    private OrderStatusDto orderStatus;

}
