package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.order.OrderDetailPostDto;
import com.nocountry.backend.dto.order.OrderListGetDto;
import com.nocountry.backend.dto.order.OrderPostDto;
import com.nocountry.backend.dto.order.OrderUpdatePostDto;
import com.nocountry.backend.model.entity.Order;
import org.mapstruct.*;

import java.util.List;


@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface IOrderMapper {

    @Mappings({
            @Mapping(target = "orderStatusId", source = "orderStatusFk"),
            @Mapping(target = "shippingAddressId", source = "shippingAddressFk"),
            @Mapping(target = "shippingMethodId", source = "shippingMethodFk"),
            @Mapping(target = "userId", source = "userFk")
    }
    )
    OrderPostDto toOrderDto(Order order);

    OrderDetailPostDto toOrderDetailPostDto(Order order);


    List<OrderListGetDto> toOrderListGetDtos(List<Order> orders);


    OrderListGetDto toOrderListGetDto(Order order);

    @Mappings({
            @Mapping(target = "id", ignore = true),
            @Mapping(target = "user", ignore = true),
            @Mapping(target = "shippingAddress", ignore = true),
            @Mapping(target = "shippingMethod", ignore = true),
            @Mapping(target = "orderStatus", ignore = true),
            @Mapping(target = "shippingAddressFk", source = "shippingAddressId"),
            @Mapping(target = "shippingMethodFk", source = "shippingMethodId"),
            @Mapping(target = "orderStatusFk", source = "orderStatusId"),
            @Mapping(target = "userFk", ignore = true)
    }
    )
    void updateOrder(OrderUpdatePostDto orderUpdatePostDto, @MappingTarget Order order);

    @InheritInverseConfiguration
    @Mappings({
            @Mapping(target = "id", ignore = true),
            @Mapping(target = "user", ignore = true),
            @Mapping(target = "shippingAddress", ignore = true),
            @Mapping(target = "shippingMethod", ignore = true),
            @Mapping(target = "orderStatus", ignore = true),
            @Mapping(target = "shippingAddressFk", source = "shippingAddressId"),
            @Mapping(target = "shippingMethodFk", source = "shippingMethodId"),
            @Mapping(target = "orderStatusFk", source = "orderStatusId"),
            @Mapping(target = "userFk", source = "userId")
    }
    )
    Order toOrder(OrderPostDto orderPostDto);

}
