package com.nocountry.backend.dto.orderItem;

import com.nocountry.backend.dto.order.OrderDto;
import com.nocountry.backend.dto.product.ProductDTO;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class OrderItemDto {

        private int id;
        private ProductDTO product;
        //private OrderDto order;
        private int quantity;

    }

