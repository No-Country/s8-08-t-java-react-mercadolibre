package com.nocountry.backend.dto.order;

import com.google.gson.annotations.SerializedName;
import com.nocountry.backend.dto.address.AddressDetailPostDto;
import com.nocountry.backend.dto.orderItem.OrderItemDto;
import com.nocountry.backend.dto.orderStatus.OrderStatusDto;
import com.nocountry.backend.dto.shippingMethod.ShippingMethodDto;
import com.nocountry.backend.dto.user.UserRegisterDto;
import lombok.*;
import java.util.Date;
import java.util.Set;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {

    private int id;
    @SerializedName("fecha")
    private Date date;
    private UserRegisterDto user;
    private AddressDetailPostDto shippingAddress;
    private double orderTotal;
    private ShippingMethodDto shippingMethod;
    private OrderStatusDto orderStatus;
    private Set<OrderItemDto> items;
}
