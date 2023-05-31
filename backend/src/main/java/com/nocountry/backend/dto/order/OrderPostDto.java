package com.nocountry.backend.dto.order;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.SerializedName;
import com.nocountry.backend.dto.orderItem.OrderItemPostDto;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter

public class OrderPostDto {
/*    @JsonProperty("order_id")
    private  Long id;
  */
    @SerializedName("Date")
    private Date date;
    @JsonProperty("user_id")
    private Long userId;
    @JsonProperty("shipping_address_id")
    private Long shippingAddressId;

    @JsonProperty("order_total")
    private double orderTotal;
    @JsonProperty("shipping_method_id")
    private Long shippingMethodId;

    @JsonProperty("order_status_id")
    private Long orderStatusId;
    @JsonProperty("list_items")
    private List<OrderItemPostDto> listItems;

}
