package com.nocountry.backend.service;

import com.nocountry.backend.dto.address.AddressDetailPostDto;
import com.nocountry.backend.dto.address.AddressListGetDto;
import com.nocountry.backend.dto.address.AddressPostDto;
import com.nocountry.backend.dto.address.AddressUpdatePostDto;

import java.util.List;

public interface IAddressService {

    List<AddressListGetDto> findAllByUserId(Long userId);

    AddressDetailPostDto findById(Integer addressId);

    AddressListGetDto findByUserIdAndStatusTrue(Long userId);

    AddressPostDto save(AddressPostDto addressPostDto);


    AddressDetailPostDto update(Integer addressId, AddressUpdatePostDto addressUpdatePostDto);


    void updateStatus(Long userId, Integer addressId);

    void deleteById(Integer idAddress);

}
