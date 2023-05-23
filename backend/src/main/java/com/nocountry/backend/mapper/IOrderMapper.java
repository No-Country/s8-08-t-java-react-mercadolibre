package com.nocountry.backend.mapper;
import com.nocountry.backend.model.entity.Order;
import com.nocountry.backend.dto.order.OrderDto;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.factory.Mappers;

import java.util.List;


@Mapper(componentModel = "spring", uses = { IUserMapper.class, IOrderStatusMapper.class, IOrderStatusMapper.class}, nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface IOrderMapper {
    IOrderMapper INSTANCE = Mappers.getMapper(IOrderMapper.class);
    OrderDto toOrderDto(Order order);

    Order toOrder(OrderDto DTO);

    List<OrderDto> toOrderDTO(List<Order> orders);

    List<Order> toOrders(List<OrderDto> ordersDTO);
}

