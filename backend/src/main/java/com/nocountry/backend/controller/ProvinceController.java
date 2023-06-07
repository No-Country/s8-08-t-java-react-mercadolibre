package com.nocountry.backend.controller;

import com.nocountry.backend.dto.province.ProvinceDto;
import com.nocountry.backend.service.IProvinceService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/provinces")
@RequiredArgsConstructor
@Tag(name = "Province", description = "Provincias de argentina")
public class ProvinceController {

    private final IProvinceService provincesService;


    @GetMapping("")
    @Operation(summary = "Provincia de Argentina ingresando el codigo postal.")
    public ResponseEntity<ProvinceDto> findByZipCode(@RequestParam(name = "zipcode") String zipCode) {
        return new ResponseEntity<>(provincesService.validZipCode(zipCode), HttpStatus.OK);
    }
}
