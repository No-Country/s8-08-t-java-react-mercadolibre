package com.nocountry.backend.repository.product_repository;

import com.nocountry.backend.model.entity.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISubcategoryRepository extends JpaRepository<Subcategory, Integer> {
}
