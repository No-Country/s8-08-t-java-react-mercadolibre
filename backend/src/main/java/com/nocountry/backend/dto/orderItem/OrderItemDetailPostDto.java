package com.nocountry.backend.dto.orderItem;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nocountry.backend.dto.order.OrderListGetDto;
import com.nocountry.backend.dto.product.ProductDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemDetailPostDto {
   /* @JsonProperty("item_id")
    private  Long id;
    */
    private OrderListGetDto order;
    @JsonProperty("quantity")
    private int quantity;
    private ProductDto product;
}
