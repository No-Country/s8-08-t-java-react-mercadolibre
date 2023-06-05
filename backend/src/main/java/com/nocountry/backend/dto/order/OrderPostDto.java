package com.nocountry.backend.dto.order;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter

public class OrderPostDto {
    @JsonProperty("order_id")
    private  Long id;
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

}
