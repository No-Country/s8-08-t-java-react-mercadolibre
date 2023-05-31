package com.nocountry.backend.service;

import com.nocountry.backend.dto.orderItem.OrderItemListGetDto;
import com.nocountry.backend.dto.orderItem.OrderItemPostDto;
import com.nocountry.backend.dto.orderItem.OrderItemUpdatePostDto;
import com.nocountry.backend.exception.ResourceNotFoundException;

import java.util.List;

public interface IOrderItemService {
    List<OrderItemListGetDto> getAll();
    OrderItemListGetDto getById(Long id) throws ResourceNotFoundException;

    OrderItemPostDto post(OrderItemPostDto orderItem) throws ResourceNotFoundException;

    OrderItemListGetDto patch(Long id, OrderItemUpdatePostDto orderItemUpdatePostDto) throws ResourceNotFoundException;

    void delete(Long id) throws ResourceNotFoundException;
    List<OrderItemListGetDto>getItemsByOrder(Long id);
    List<OrderItemListGetDto>getItemsByProduct(Long id);

}
