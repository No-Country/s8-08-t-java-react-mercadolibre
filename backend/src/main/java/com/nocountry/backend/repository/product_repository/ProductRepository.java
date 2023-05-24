package com.nocountry.backend.repository.product_repository;

import com.nocountry.backend.entity.User;
import com.nocountry.backend.entity.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
}
