package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.order.OrderDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.mapper.IOrderMapper;
import com.nocountry.backend.model.entity.Order;
import com.nocountry.backend.repository.IOrderRepository;
import com.nocountry.backend.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class OrderServiceImpl implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;

    @Autowired
    private IOrderMapper orderMapper;


    @Override
    public List<OrderDto> getAll() {
        return orderMapper.toOrderDTO(orderRepository.findAll());
    }


    @Override
    public OrderDto getById(int id) throws ResourceNotFoundException {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order with id " + id + " not found"));
        return orderMapper.toOrderDto(order);
    }


    @Override
    public OrderDto post(Order order) {
        Order savedOrder = orderRepository.save(order);
        return orderMapper.toOrderDto(savedOrder);
    }




    @Override
    public OrderDto patch(int id, Order order) throws ResourceNotFoundException {
        Order existingOrder = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order with id " + id + " not found"));
        if (order.getDate() != null) {
            existingOrder.setDate(order.getDate());
        }
//////////agregar
        Order updatedOrder = orderRepository.save(existingOrder);
        return orderMapper.toOrderDto(updatedOrder);
    }

    @Override
    public OrderDto delete(int id) throws ResourceNotFoundException {
        Order orderToDelete = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order with id " + id + " not found"));
        orderRepository.delete(orderToDelete);
        return orderMapper.toOrderDto(orderToDelete);
    }


    @Override
    public List<OrderDto> getByUser (int id) {

        return orderMapper.toOrderDTO(orderRepository.findByUser_id(id));

    }

}
