package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.address.AddressDetailPostDto;
import com.nocountry.backend.dto.address.AddressListGetDto;
import com.nocountry.backend.dto.address.AddressPostDto;
import com.nocountry.backend.dto.address.AddressUpdatePostDto;
import com.nocountry.backend.mapper.IAddressMapper;
import com.nocountry.backend.repository.IAddressRepository;
import com.nocountry.backend.service.IAddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements IAddressService {

    private final IAddressMapper addressMapper;

    private final IAddressRepository addressRepository;


    @Override
    public List<AddressListGetDto> findAllByUserId(Long userId) {
        return this.addressMapper.toAddressListGetDtos(this.addressRepository.findAllByUserFk(userId));
    }

    @Override
    public AddressDetailPostDto findById(Integer addressId) {
        return this.addressRepository.findById(addressId).map(this.addressMapper::toAddressDetailPostDto)
                .orElseThrow(() -> new RuntimeException("El id de la direccion no existe."));
    }

    @Override
    public AddressListGetDto findByUserIdAndStatusTrue(Long userId) {
        return this.addressRepository.findByUserFkAndStatusTrue(userId).map(this.addressMapper::toAddressListGetDto)
                .orElseThrow(() -> new RuntimeException("No existe una direccion activa."));
    }

    @Override
    public AddressPostDto save(AddressPostDto addressPostDto) {
        if (addressPostDto.getStatus() && !this.findAllByUserId(addressPostDto.getUserId()).isEmpty()) {
            this.changeStatusFalse(addressPostDto.getUserId());
        }
        return this.addressMapper.toAddressDto(
                this.addressRepository.save(this.addressMapper.toAddress(addressPostDto))
        );
    }

    @Override
    public AddressDetailPostDto update(Integer addressId, AddressUpdatePostDto addressUpdatePostDto) {
        this.addressRepository.findById(addressId).ifPresent(
                address -> {
                    this.addressMapper.updateAddress(addressUpdatePostDto, address);
                    this.addressRepository.save(address);
                }
        );
        return this.findById(addressId);
    }

    @Override
    public void updateStatus(Long userId, Integer addressId) {
        this.changeStatusFalse(userId);
        this.changeStatusTrue(addressId);
    }

    private void changeStatusTrue(Integer addressId) {
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
    public void deleteById(Integer idAddress) {
        this.addressRepository.deleteById(idAddress);
    }
}
