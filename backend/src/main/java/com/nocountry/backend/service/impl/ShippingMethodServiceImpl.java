package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.shippingMethod.ShippingMethodDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.mapper.IShippingMethodMapper;
import com.nocountry.backend.model.entity.ShippingMethod;
import com.nocountry.backend.repository.IShippingMethodRepository;
import com.nocountry.backend.service.IShippingMethodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ShippingMethodServiceImpl implements IShippingMethodService {
    @Autowired
    private IShippingMethodRepository shippingMethodRepository;

    @Autowired
    private IShippingMethodMapper shippingMethodMapper;


    @Override
    public List<ShippingMethodDto> getAll() {
        return shippingMethodMapper.toShippingMethodsDTO(shippingMethodRepository.findAll());
    }


    @Override
    public ShippingMethodDto getById(Long id) throws ResourceNotFoundException {
        ShippingMethod shippingMethod = shippingMethodRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ShippingMethod with id " + id + " not found"));
        return shippingMethodMapper.toShippingMethodDto(shippingMethod);
    }


    @Override
    public ShippingMethodDto post(ShippingMethod shippingMethod) {
        ShippingMethod savedShippingMethod = shippingMethodRepository.save(shippingMethod);
        return shippingMethodMapper.toShippingMethodDto(savedShippingMethod);
    }




    @Override
    public ShippingMethodDto patch(Long id, ShippingMethod shippingMethod) throws ResourceNotFoundException {
        ShippingMethod existingShippingMethod = shippingMethodRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ShippingMethod with id " + id + " not found"));
        if (shippingMethod.getName() != null) {
            existingShippingMethod.setName(shippingMethod.getName());
        }
        ShippingMethod updatedShippingMethod = shippingMethodRepository.save(existingShippingMethod);
        return shippingMethodMapper.toShippingMethodDto(updatedShippingMethod);
    }

    @Override
    public ShippingMethodDto delete(Long id) throws ResourceNotFoundException {
        ShippingMethod shippingMethodToDelete = shippingMethodRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ShippingMethod with id " + id + " not found"));
        shippingMethodRepository.delete(shippingMethodToDelete);
        return shippingMethodMapper.toShippingMethodDto(shippingMethodToDelete);
    }


}
