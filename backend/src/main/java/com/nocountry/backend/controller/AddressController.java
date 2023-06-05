package com.nocountry.backend.controller;


import com.nocountry.backend.dto.address.*;
import com.nocountry.backend.service.IAddressService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/address")
@RequiredArgsConstructor
@Tag(name = "Address", description = "Direcciones de usuario.")
public class AddressController {

    private final IAddressService addressService;

    @GetMapping("/user/{userId}")
    @Operation(summary = "Direcciones, se envio el ID del usuario.")
    public ResponseEntity<List<AddressListGetDto>> findAllByUserId(@PathVariable Long userId) {
        return new ResponseEntity<>(addressService.findAllByUserId(userId), HttpStatus.OK);
    }


    @GetMapping("/{addressId}")
    @Operation(summary = "Direccion por ID.")
    public ResponseEntity<AddressDetailPostDto> findById(@PathVariable Long addressId) {
        return new ResponseEntity<>(addressService.findById(addressId), HttpStatus.OK);
    }

    @GetMapping("/user/active/{userId}")
    @Operation(summary = "Direccion activa de usuario, se envia el ID del usuario.")
    public ResponseEntity<AddressListGetDto> findByUserIdAndStatusTrue(@PathVariable Long userId) {
        return new ResponseEntity<>(addressService.findByUserIdAndStatusTrue(userId), HttpStatus.OK);
    }

    @GetMapping("/{addressId}/user/{userId}")
    @Operation(summary = "Cambiar direccion activa, se envia el ID del usuario y el ID de la nueva direccion.")
    public ResponseEntity<AddressListGetDto> changeStatus(@PathVariable Long userId, @PathVariable Long addressId) {
        addressService.updateStatus(userId, addressId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("")
    @Operation(summary = "Guardar direccion para un usuario.")
    public ResponseEntity<AddressPostResponseDto> save(@RequestBody AddressPostDto address) {
        return new ResponseEntity<>(addressService.save(address), HttpStatus.CREATED);
    }

    @PostMapping("/{addressId}")
    @Operation(summary = "Editar direccion de un usuario.")
    public ResponseEntity<AddressDetailPostDto> update(@PathVariable Long addressId,
                                                       @RequestBody AddressUpdatePostDto address) {
        return new ResponseEntity<>(addressService.update(addressId, address), HttpStatus.OK);
    }


    @DeleteMapping("/{addressId}")
    @Operation(summary = "Eliminar direccion de un usuario enviando su ID.")
    public ResponseEntity<AddressDetailPostDto> deleteById(@PathVariable Long addressId) {
        addressService.deleteById(addressId);
        return ResponseEntity.noContent().build();
    }
}
