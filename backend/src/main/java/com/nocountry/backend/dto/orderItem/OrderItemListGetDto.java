package com.nocountry.backend.dto.orderItem;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nocountry.backend.dto.product.ProductDto;


public class OrderItemListGetDto {
    @JsonProperty("item_id")
    private  Long id;
    private OrderItemListGetDto order;
    @JsonProperty("quantity")
    private int quantity;
    private ProductDto product;
}
