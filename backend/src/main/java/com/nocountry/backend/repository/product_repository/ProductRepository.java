package com.nocountry.backend.repository.product_repository;

import com.nocountry.backend.model.entity.Order;
import com.nocountry.backend.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findByUser_id(int id);

}