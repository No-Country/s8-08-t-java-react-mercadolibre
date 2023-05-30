package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.orderStatus.OrderStatusDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.mapper.IOrderStatusMapper;
import com.nocountry.backend.model.entity.OrderStatus;
import com.nocountry.backend.repository.IOrderStatusRepository;
import com.nocountry.backend.service.IOrderStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrderStatusServiceImpl implements IOrderStatusService {
    @Autowired
    private IOrderStatusRepository orderStatusRepository;

    @Autowired
    private IOrderStatusMapper orderStatusMapper;


    @Override
    public List<OrderStatusDto> getAll() {
        return orderStatusMapper.toOrderStatusDTO(orderStatusRepository.findAll());
    }


    @Override
    public OrderStatusDto getById(Long id) throws ResourceNotFoundException {
        OrderStatus orderStatus = orderStatusRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("OrderStatus with id " + id + " not found"));
        return orderStatusMapper.toOrderStatusDto(orderStatus);
    }


    @Override
    public OrderStatusDto post(OrderStatus orderStatus) {
        OrderStatus savedOrderStatus = orderStatusRepository.save(orderStatus);
        return orderStatusMapper.toOrderStatusDto(savedOrderStatus);
    }




    @Override
    public OrderStatusDto patch(Long id, OrderStatus orderStatus) throws ResourceNotFoundException {
        OrderStatus existingOrderStatus = orderStatusRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("OrderStatus with id " + id + " not found"));
        if (orderStatus.getStatus() != null) {
            existingOrderStatus.setStatus(orderStatus.getStatus());
        }

        OrderStatus updatedOrderStatus = orderStatusRepository.save(existingOrderStatus);
        return orderStatusMapper.toOrderStatusDto(updatedOrderStatus);
    }

    @Override
    public OrderStatusDto delete(Long id) throws ResourceNotFoundException {
        OrderStatus orderStatusToDelete = orderStatusRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("OrderStatus with id " + id + " not found"));
        orderStatusRepository.delete(orderStatusToDelete);
        return orderStatusMapper.toOrderStatusDto(orderStatusToDelete);
    }


}
