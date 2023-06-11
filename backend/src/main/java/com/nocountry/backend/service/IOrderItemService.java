package com.nocountry.backend.service;

import com.nocountry.backend.dto.orderItem.OrderItemDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.OrderItem;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IOrderItemService {
    List<OrderItemDto> getAll();
    OrderItemDto getById(int id) throws ResourceNotFoundException;

    OrderItemDto post(OrderItem orderItem) throws ResourceNotFoundException;

    OrderItemDto patch(int id,OrderItem orderItem) throws ResourceNotFoundException;

    OrderItemDto delete(int id) throws ResourceNotFoundException;
    /*List<OrderItemDto>getItemsByOrder(int id);
    List<OrderItemDto>getItemsByProduct(int id);
*/
}
