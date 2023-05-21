package com.nocountry.backend.service;

import com.nocountry.backend.dto.location.LocalityDto;

import java.util.List;

public interface ILocationService {

    List<LocalityDto> findAllByIdProvince(String idProvince);
}
