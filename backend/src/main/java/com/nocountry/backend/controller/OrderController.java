package com.nocountry.backend.controller;

import com.nocountry.backend.dto.address.AddressPostDto;
import com.nocountry.backend.dto.address.AddressUpdatePostDto;
import com.nocountry.backend.dto.order.OrderDetailPostDto;
import com.nocountry.backend.dto.order.OrderListGetDto;
import com.nocountry.backend.dto.order.OrderPostDto;
import com.nocountry.backend.dto.order.OrderUpdatePostDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.Order;
import com.nocountry.backend.service.IOrderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

 @RestController
 @RequestMapping("/api/v1/orders")
 @RequiredArgsConstructor
 @Tag(name = "Orders", description = "Purchase Order")

public class OrderController  {

    @Autowired
    IOrderService orderService;

    @GetMapping()
    public ResponseEntity<List<OrderListGetDto>> getAll() {
        try {
            List<OrderListGetDto> response = orderService.getAll();
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderListGetDto> getById(@PathVariable Long id) throws ResourceNotFoundException {
        OrderListGetDto response = orderService.getById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<OrderPostDto> postOrder(@RequestBody OrderPostDto order) {
     OrderPostDto createdOrder = orderService.post(order);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
//        return new ResponseEntity<>(orderService.save(order), HttpStatus.CREATED);

    }

    @PatchMapping("/{id}")
    public ResponseEntity<OrderListGetDto> patchOrder(@PathVariable Long id, @RequestBody OrderUpdatePostDto orderUpdatePostDto) throws ResourceNotFoundException {
        OrderListGetDto updatedOrder = orderService.patch(id, orderUpdatePostDto);

        return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long id) throws ResourceNotFoundException {
        orderService.delete(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("Order deleted");
    }

    @GetMapping("/user/{id}")
    @Operation(summary = "Ordenes por usuario, se envia el ID del usuario.")
    public ResponseEntity<List<OrderListGetDto>> getByUser(@PathVariable Long id) {
        try {
            List<OrderListGetDto> response = orderService.getByUser(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }


}

