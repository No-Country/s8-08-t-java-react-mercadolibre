package com.nocountry.backend.mapper;


import com.nocountry.backend.dto.orderItem.OrderItemDetailPostDto;
import com.nocountry.backend.dto.orderItem.OrderItemListGetDto;
import com.nocountry.backend.dto.orderItem.OrderItemPostDto;
import com.nocountry.backend.dto.orderItem.OrderItemUpdatePostDto;
import com.nocountry.backend.model.entity.OrderItem;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface IOrderItemMapper {

    @Mappings({
            @Mapping(target = "orderId", source = "orderFk"),
            @Mapping(target = "productId", source = "productFk")
    }
    )
    OrderItemPostDto toOrderItemDto(OrderItem orderItem);


    OrderItemDetailPostDto toOrderItemDetailPostDto(OrderItem orderItem);

    List<OrderItemListGetDto> toOrderItemListGetDtos(List<OrderItem> orderItems);


    OrderItemListGetDto toOrderItemListGetDto(OrderItem orderItem);

    @Mappings({
            @Mapping(target = "id", ignore = true),
            @Mapping(target = "order", ignore = true),
            @Mapping(target = "product", ignore = true),
            @Mapping(target = "orderFk", source = "orderId"),
            @Mapping(target = "productFk", source = "productId"),

    }
    )
    void updateOrderItem(OrderItemUpdatePostDto orderItemUpdatePostDto, @MappingTarget OrderItem orderItem);

    @InheritInverseConfiguration
    @Mappings({
            @Mapping(target = "id", ignore = true),
            @Mapping(target = "order", ignore = true),
            @Mapping(target = "product", ignore = true),
            @Mapping(target = "orderFk", source = "orderId"),
            @Mapping(target = "productFk", source = "productId"),

    }
    )
    OrderItem toOrderItem(OrderItemPostDto orderItemPostDto);

}
