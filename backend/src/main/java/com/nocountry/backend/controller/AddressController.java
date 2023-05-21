package com.nocountry.backend.controller;


import com.nocountry.backend.dto.address.AddressDetailPostDto;
import com.nocountry.backend.dto.address.AddressListGetDto;
import com.nocountry.backend.dto.address.AddressPostDto;
import com.nocountry.backend.dto.address.AddressUpdatePostDto;
import com.nocountry.backend.service.IAddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/address")
@RequiredArgsConstructor
public class AddressController {

    private final IAddressService addressService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<AddressListGetDto>> findAllByUserId(@PathVariable Integer userId) {
        return new ResponseEntity<>(addressService.findAllByUserId(userId), HttpStatus.OK);
    }


    @GetMapping("/{addressId}")
    public ResponseEntity<AddressDetailPostDto> findById(@PathVariable Integer addressId) {
        return new ResponseEntity<>(addressService.findById(addressId), HttpStatus.OK);
    }

    @GetMapping("/user/active/{userId}")
    public ResponseEntity<AddressListGetDto> findByUserIdAndStatusTrue(@PathVariable Integer userId) {
        return new ResponseEntity<>(addressService.findByUserIdAndStatusTrue(userId), HttpStatus.OK);
    }

    @GetMapping("/{addressId}/user/{userId}")
    public ResponseEntity<AddressListGetDto> changeStatus(@PathVariable Integer userId, @PathVariable Integer addressId) {
        addressService.updateStatus(userId, addressId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("")
    public ResponseEntity<AddressPostDto> save(@RequestBody AddressPostDto address) {
        return new ResponseEntity<>(addressService.save(address), HttpStatus.CREATED);
    }

    @PostMapping("/{addressId}")
    public ResponseEntity<AddressDetailPostDto> update(@PathVariable Integer addressId,
                                                       @RequestBody AddressUpdatePostDto address) {
        return new ResponseEntity<>(addressService.update(addressId, address), HttpStatus.OK);
    }


    @DeleteMapping("/{addressId}")
    public ResponseEntity<AddressDetailPostDto> deleteById(@PathVariable Integer addressId) {
        addressService.deleteById(addressId);
        return ResponseEntity.noContent().build();
    }
}
