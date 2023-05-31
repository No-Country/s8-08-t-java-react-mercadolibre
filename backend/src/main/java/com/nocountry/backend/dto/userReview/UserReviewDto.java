package com.nocountry.backend.dto.userReview;

import com.nocountry.backend.dto.orderItem.OrderItemListGetDto;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class  UserReviewDto {

    private int id;
    private int  ratingValue;
    private String comments;
    private OrderItemListGetDto item;
}