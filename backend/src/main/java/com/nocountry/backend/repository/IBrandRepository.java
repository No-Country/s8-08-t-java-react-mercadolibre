package com.nocountry.backend.repository;

import com.nocountry.backend.model.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBrandRepository extends JpaRepository<Brand, Integer> {

    Brand findByName(String name);
}
