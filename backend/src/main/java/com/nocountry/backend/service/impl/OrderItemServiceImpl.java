package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.orderItem.OrderItemDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.mapper.IOrderItemMapper;
import com.nocountry.backend.model.entity.OrderItem;
import com.nocountry.backend.repository.IOrderItemRepository;
import com.nocountry.backend.service.IOrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrderItemServiceImpl implements IOrderItemService {
    @Autowired
    private IOrderItemRepository orderItemRepository;

    @Autowired
    private IOrderItemMapper orderItemMapper;


    @Override
    public List<OrderItemDto> getAll() {
        return orderItemMapper.toOrderItemDTO(orderItemRepository.findAll());
    }


    @Override
    public OrderItemDto getById(int id) throws ResourceNotFoundException {
        OrderItem orderItem = orderItemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("OrderItem with id " + id + " not found"));
        return orderItemMapper.toOrderItemDto(orderItem);
    }


    @Override
    public OrderItemDto post(OrderItem orderItem) {
        OrderItem savedOrderItem = orderItemRepository.save(orderItem);
        return orderItemMapper.toOrderItemDto(savedOrderItem);
    }




    @Override
    public OrderItemDto patch(int id, OrderItem orderItem) throws ResourceNotFoundException {
        OrderItem existingOrderItem = orderItemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("OrderItem with id " + id + " not found"));
        if (orderItem.getOrder() != null) {
            existingOrderItem.setOrder(orderItem.getOrder());
        }
        if (orderItem.getProduct() != null) {
            existingOrderItem.setProduct(orderItem.getProduct());
        }

        existingOrderItem.setQuantity(orderItem.getQuantity());
        OrderItem updatedOrderItem = orderItemRepository.save(existingOrderItem);
        return orderItemMapper.toOrderItemDto(updatedOrderItem);
    }

    @Override
    public OrderItemDto delete(int id) throws ResourceNotFoundException {
        OrderItem orderItemToDelete = orderItemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("OrderItem with id " + id + " not found"));
        orderItemRepository.delete(orderItemToDelete);
        return orderItemMapper.toOrderItemDto(orderItemToDelete);
    }


}
