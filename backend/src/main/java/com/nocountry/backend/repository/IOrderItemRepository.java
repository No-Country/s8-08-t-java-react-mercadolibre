package com.nocountry.backend.repository;


import com.nocountry.backend.model.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IOrderItemRepository  extends JpaRepository<OrderItem, Integer> {
   // List<OrderItem> findByOrder_id(int id);
 //   List<OrderItem> findByProduct_id(int id);

}