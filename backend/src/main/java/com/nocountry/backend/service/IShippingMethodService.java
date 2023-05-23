package com.nocountry.backend.service;


import com.nocountry.backend.dto.shippingMethod.ShippingMethodDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.ShippingMethod;

import java.util.List;

public interface IShippingMethodService {
    List<ShippingMethodDto> getAll();
    ShippingMethodDto getById(int id) throws ResourceNotFoundException;

    ShippingMethodDto post(ShippingMethod shippingMethod);

    ShippingMethodDto patch(int id,ShippingMethod shippingMethod) throws ResourceNotFoundException;

    ShippingMethodDto delete(int id) throws ResourceNotFoundException;


}
