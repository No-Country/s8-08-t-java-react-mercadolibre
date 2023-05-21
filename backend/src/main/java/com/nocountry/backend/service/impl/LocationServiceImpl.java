package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.location.LocalityDto;
import com.nocountry.backend.service.ILocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LocationServiceImpl implements ILocationService {

//    private final IApiGeorefArExecute executeApiGeorefArExecute;


    @Override
    public List<LocalityDto> findAllByIdProvince(String idProvince) {
//        LocalityResponse localityResponse = this.executeApiGeorefArExecute.executeLocation(idProvince, 1);
        return null;
    }
}
