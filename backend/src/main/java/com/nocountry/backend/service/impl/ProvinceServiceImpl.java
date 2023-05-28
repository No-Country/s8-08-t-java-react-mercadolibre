package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.apilading.DataDto;
import com.nocountry.backend.dto.province.ProvinceDto;
import com.nocountry.backend.mapper.IProvinceMapper;
import com.nocountry.backend.model.entity.Province;
import com.nocountry.backend.repository.IProvinceRepository;
import com.nocountry.backend.service.IProvinceService;
import com.nocountry.backend.util.apilanding.IApiLandingExecute;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProvinceServiceImpl implements IProvinceService {


    Logger logger = LoggerFactory.getLogger(ProvinceServiceImpl.class);

    private final IProvinceRepository provinceRepository;

    private final IApiLandingExecute apiLandingExecute;


    private final IProvinceMapper provinceMapper;

    @Override
    public ProvinceDto findByName(String name) {
        name = name.toLowerCase();
        Optional<Province> byNameContainingIgnoreCase = this.provinceRepository.findByNameContainingIgnoreCase(name);
        return this.provinceRepository.findByNameContainingIgnoreCase(name).map(provinceMapper::toProvinceDto)
                .orElseThrow(() -> new RuntimeException("El nombre de la provincia no existe."));
    }


    @Override
    public ProvinceDto validZipCode(String zipCode) {
        List<DataDto> data = apiLandingExecute.executeValidZipCode(zipCode).getData();
        DataDto dataDto = data.get(0);
        ProvinceDto byName = this.findByName(dataDto.getProvince());
        byName.setLocality(dataDto.getLocality().charAt(0)
                + dataDto.getLocality().substring(1).toLowerCase());
        return byName;
    }

}
