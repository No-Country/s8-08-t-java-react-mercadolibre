package com.nocountry.backend.repository;

import com.nocountry.backend.model.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IOrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByUser_id(int id);
}
