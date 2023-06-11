package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.address.*;
import com.nocountry.backend.mapper.IAddressMapper;
import com.nocountry.backend.model.entity.Address;
import com.nocountry.backend.model.entity.Province;
import com.nocountry.backend.repository.IAddressRepository;
import com.nocountry.backend.repository.IProvinceRepository;
import com.nocountry.backend.service.IAddressService;
import com.nocountry.backend.service.IProvinceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements IAddressService {

    private final IAddressMapper addressMapper;

    private final IAddressRepository addressRepository;

    private final IProvinceRepository provinceRepository;


    @Override
    public List<AddressListGetDto> findAllByUserId(Long userId) {
        return this.addressMapper.toAddressListGetDtos(this.addressRepository.findAllByUserFk(userId));
    }

    @Override
    public AddressDetailPostDto findById(Long addressId) {
        return this.addressRepository.findById(addressId).map(this.addressMapper::toAddressDetailPostDto)
                .orElseThrow(() -> new RuntimeException("El id de la direccion no existe."));
    }

    @Override
    public AddressListGetDto findByUserIdAndStatusTrue(Long userId) {
        return this.addressRepository.findByUserFkAndStatusTrue(userId).map(this.addressMapper::toAddressListGetDto)
                .orElseThrow(() -> new RuntimeException("No existe una direccion activa."));
    }

    @Override
    public AddressPostResponseDto save(AddressPostDto addressPostDto) {
        if (addressPostDto.getStatus() && !this.findAllByUserId(addressPostDto.getUserId()).isEmpty()) {
            this.changeStatusFalse(addressPostDto.getUserId());
        }
        Address save = this.addressRepository.save(this.addressMapper.toAddress(addressPostDto));
        Province province = this.provinceRepository.findById(save.getProvinceFk()).orElseThrow(() -> new RuntimeException(""));
        save.setProvince(province);


        return this.addressMapper.tAddressPostResponseDto(save);


    }

    @Override
    public AddressDetailPostDto update(Long addressId, AddressUpdatePostDto addressUpdatePostDto) {
        this.addressRepository.findById(addressId).ifPresent(
                address -> {
                    this.addressMapper.updateAddress(addressUpdatePostDto, address);
                    this.addressRepository.save(address);
                }
        );
        return this.findById(addressId);
    }

    @Override
    public void updateStatus(Long userId, Long addressId) {
        this.changeStatusFalse(userId);
        this.changeStatusTrue(addressId);
    }

    private void changeStatusTrue(Long addressId) {
        this.addressRepository.findById(addressId).ifPresent(address -> {
            address.setStatus(true);
            this.addressRepository.save(address);
        });
    }

    private void changeStatusFalse(Long userId) {
        this.addressRepository.findByUserFkAndStatusTrue(userId).map(address -> {
            address.setStatus(false);
            return address;
        }).ifPresent(this.addressRepository::save);
    }

    @Override
    public void deleteById(Long idAddress) {
        this.addressRepository.deleteById(idAddress);
    }
}
