package com.nocountry.backend.dto.orderItem;

import lombok.*;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class OrderItemDto {

    private int id;
    //   private ProductDTO product;
    //private OrderDto order;
    private int quantity;
    //      private int order_id;
    //    private Set<UserReviewDto> reviews;
}

