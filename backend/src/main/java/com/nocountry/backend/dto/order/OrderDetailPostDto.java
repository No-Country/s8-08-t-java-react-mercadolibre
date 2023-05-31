package com.nocountry.backend.dto.order;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.SerializedName;
import com.nocountry.backend.dto.address.AddressDetailPostDto;
import com.nocountry.backend.dto.orderItem.OrderItemDetailPostDto;
import com.nocountry.backend.dto.orderItem.OrderItemListGetDto;
import com.nocountry.backend.dto.orderItem.OrderItemPostDto;
import com.nocountry.backend.dto.orderStatus.OrderStatusDto;
import com.nocountry.backend.dto.shippingMethod.ShippingMethodDto;

import java.util.Date;
import java.util.List;

public class OrderDetailPostDto {
    // private  Long id;
    @SerializedName("Date")
    @JsonProperty("date")
    private Date date;
    private AddressDetailPostDto shippingAddress;
    @JsonProperty("order_total")
    private double orderTotal;
    private ShippingMethodDto shippingMethod;
    private OrderStatusDto orderStatus;
    @JsonProperty("list_items")
    private List<OrderDetailPostDto> listItems;

}

