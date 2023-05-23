package com.nocountry.backend.service;


import com.nocountry.backend.dto.orderStatus.OrderStatusDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.OrderStatus;

import java.util.List;

public interface IOrderStatusService {
    List<OrderStatusDto> getAll();
    OrderStatusDto getById(int id) throws ResourceNotFoundException;

    OrderStatusDto post(OrderStatus orderStatus);

    OrderStatusDto patch(int id,OrderStatus orderStatus) throws ResourceNotFoundException;

    OrderStatusDto delete(int id) throws ResourceNotFoundException;


}
