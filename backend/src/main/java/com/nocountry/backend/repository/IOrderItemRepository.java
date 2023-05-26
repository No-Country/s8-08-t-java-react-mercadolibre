package com.nocountry.backend.repository;


import com.nocountry.backend.model.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderItemRepository  extends JpaRepository<OrderItem, Integer> {
}