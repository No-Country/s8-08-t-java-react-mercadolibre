package com.nocountry.backend.service;

import com.nocountry.backend.dto.order.OrderDetailPostDto;
import com.nocountry.backend.dto.order.OrderListGetDto;
import com.nocountry.backend.dto.order.OrderPostDto;
import com.nocountry.backend.dto.order.OrderUpdatePostDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.Order;

import java.util.List;

public interface IOrderService {
    List<OrderListGetDto> getAll();
    OrderListGetDto getById(Long id) throws ResourceNotFoundException;

    OrderPostDto post(OrderPostDto orderPostDto);

    OrderListGetDto patch(Long id, OrderUpdatePostDto orderUpdatePostDto) throws ResourceNotFoundException;

    void delete(Long id) throws ResourceNotFoundException;


    List<OrderListGetDto> getByUser(Long id);

}
