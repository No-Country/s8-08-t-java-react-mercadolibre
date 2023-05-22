package com.nocountry.backend.repository;

import com.nocountry.backend.model.entity.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IProvinceRepository extends JpaRepository<Province, String> {

    @Query(value = "select " +
            "provinces.province_id," +
            "provinces._name " +
            "from " +
            "provinces " +
            "where lower(provinces._name) like %?1%", nativeQuery = true)
    Optional<Province> findByNameContainingIgnoreCase(String name);

}