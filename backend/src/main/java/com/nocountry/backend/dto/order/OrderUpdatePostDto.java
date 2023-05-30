package com.nocountry.backend.dto.order;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.SerializedName;
import lombok.Setter;
import lombok.Getter;

import java.util.Date;
@Getter
@Setter
public class OrderUpdatePostDto {
    @JsonProperty("order_id")
    private  Long id;

    @SerializedName("Date")
    private Date date;
    @JsonProperty("shipping_address_id")
    private Long shippingAddressId;
    @JsonProperty("order_total")
    private double orderTotal;
    @JsonProperty("shipping_method_id")
    private Long shippingMethodId;

    @JsonProperty("order_status_id")
    private Long orderStatusId;

}
