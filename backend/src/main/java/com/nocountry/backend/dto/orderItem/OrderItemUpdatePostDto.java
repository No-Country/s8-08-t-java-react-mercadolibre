package com.nocountry.backend.dto.orderItem;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OrderItemUpdatePostDto {
    /*@JsonProperty("item_id")
    private  Long id;
    */
    @JsonProperty("order_id")
    private Long orderId;
    @JsonProperty("product_id")
    private Long productId;

    @JsonProperty("quantity")
    private int quantity;


}
