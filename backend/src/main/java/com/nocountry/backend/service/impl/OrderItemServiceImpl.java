package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.orderItem.OrderItemListGetDto;
import com.nocountry.backend.dto.orderItem.OrderItemPostDto;
import com.nocountry.backend.dto.orderItem.OrderItemUpdatePostDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.mapper.IOrderItemMapper;
import com.nocountry.backend.model.entity.OrderItem;
import com.nocountry.backend.model.entity.Product;
import com.nocountry.backend.repository.IOrderItemRepository;
import com.nocountry.backend.repository.IProductRepository;
import com.nocountry.backend.service.IOrderItemService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrderItemServiceImpl implements IOrderItemService {
    @Autowired
    private IOrderItemRepository orderItemRepository;

    @Autowired
    private IOrderItemMapper orderItemMapper;

    @Autowired
    private IProductRepository productRepository;


    @Override
    public List<OrderItemListGetDto> getAll() {
        return orderItemMapper.toOrderItemListGetDtos(orderItemRepository.findAll());
    }


    @Override
    public OrderItemListGetDto getById(Long id) throws ResourceNotFoundException {
        OrderItem orderItem = orderItemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("OrderItem with id " + id + " not found"));
        return orderItemMapper.toOrderItemListGetDto(orderItem);
    }


    @Override
    @Transactional
    public OrderItemPostDto post(OrderItemPostDto orderItemPostDto) throws ResourceNotFoundException {
        OrderItem savedOrderItem =   this.orderItemRepository.save(this.orderItemMapper.toOrderItem(orderItemPostDto));

        // descontar stock
        Product existingProduct =productRepository.findById(savedOrderItem.getProduct().getId())
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        existingProduct.setStock(existingProduct.getStock() - savedOrderItem.getQuantity());
        productRepository.save(existingProduct);


        return orderItemMapper.toOrderItemDto(savedOrderItem);
    }


    @Override
    public OrderItemListGetDto patch(Long id, OrderItemUpdatePostDto orderItemUpdatePostDto) throws ResourceNotFoundException {
        this.orderItemRepository.findById(id).ifPresent(
                orderItem -> {
                    this.orderItemMapper.updateOrderItem(orderItemUpdatePostDto, orderItem);
                    this.orderItemRepository.save(orderItem);
                }
        );
        return this.getById(id);

    }


    @Override
    public void delete(Long id) throws ResourceNotFoundException {
        OrderItem orderItemToDelete = orderItemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("OrderItem with id " + id + " not found"));
        orderItemRepository.delete(orderItemToDelete);

    }

    @Override
    public List<OrderItemListGetDto> getItemsByProduct(Long id) {
        return orderItemMapper.toOrderItemListGetDtos
                (orderItemRepository.findByProduct_id(id));

    }

    @Override
    public List<OrderItemListGetDto> getItemsByOrder(Long id) {
         return orderItemMapper.toOrderItemListGetDtos
                (orderItemRepository.findByOrder_id(id));
    }

}
