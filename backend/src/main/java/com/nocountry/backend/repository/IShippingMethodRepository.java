package com.nocountry.backend.repository;

import com.nocountry.backend.model.entity.ShippingMethod;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IShippingMethodRepository  extends JpaRepository<ShippingMethod,Long> {
}