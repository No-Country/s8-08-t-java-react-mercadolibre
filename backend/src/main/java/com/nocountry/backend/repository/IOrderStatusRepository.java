package com.nocountry.backend.repository;

import com.nocountry.backend.model.entity.OrderStatus;
import com.nocountry.backend.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderStatusRepository  extends JpaRepository<OrderStatus, Long> {
}
