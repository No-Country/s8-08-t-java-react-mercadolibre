package com.nocountry.backend.service;

import com.nocountry.backend.dto.address.*;

import java.util.List;

public interface IAddressService {

    List<AddressListGetDto> findAllByUserId(Long userId);

    AddressDetailPostDto findById(Long addressId);

    AddressListGetDto findByUserIdAndStatusTrue(Long userId);

    AddressPostResponseDto save(AddressPostDto addressPostDto);


    AddressDetailPostDto update(Long addressId, AddressUpdatePostDto addressUpdatePostDto);


    void updateStatus(Long userId, Long addressId);

    void deleteById(Long idAddress);

}
