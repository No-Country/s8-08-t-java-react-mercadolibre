package com.nocountry.backend.repository;

import com.nocountry.backend.model.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ILocationRepository extends JpaRepository<Location, String> {

    Optional<Location> findById(String locationId);
}
