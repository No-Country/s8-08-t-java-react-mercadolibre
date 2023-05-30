package com.nocountry.backend.dto.orderItem;

import com.nocountry.backend.dto.product.ProductDTO;
import com.nocountry.backend.dto.userReview.UserReviewDto;
import lombok.*;

import java.util.Set;

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

