package com.nocountry.backend.service;

import com.nocountry.backend.dto.province.ProvinceDto;

import java.util.List;

public interface IProvinceService {
    ProvinceDto validZipCode(String zipCode);

    ProvinceDto findByName(String name);

}
