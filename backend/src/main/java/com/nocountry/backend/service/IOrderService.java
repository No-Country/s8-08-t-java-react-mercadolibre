package com.nocountry.backend.service;

import com.nocountry.backend.dto.order.OrderDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.Order;

import java.util.Date;
import java.util.List;

public interface IOrderService {
    List<OrderDto> getAll();
    OrderDto getById(int id) throws ResourceNotFoundException;

    OrderDto post(Order order);

    OrderDto patch(int id,Order order) throws ResourceNotFoundException;

    OrderDto delete(int id) throws ResourceNotFoundException;

    List<OrderDto> getByUser(int id);

}
