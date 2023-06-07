package com.nocountry.backend.controller;

import com.nocountry.backend.dto.orderStatus.OrderStatusDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.OrderStatus;
import com.nocountry.backend.service.IOrderStatusService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orderStatus")
@RequiredArgsConstructor
@Tag(name = "OrderStatus", description = "Status of Purchase Order")

public class OrderStatusController  {

    @Autowired
    IOrderStatusService orderStatusService;

    @GetMapping()
    public ResponseEntity<List<OrderStatusDto>> getAll() {
        try {
            List<OrderStatusDto> response = orderStatusService.getAll();
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderStatusDto> getById(@PathVariable Long id) throws ResourceNotFoundException {
        OrderStatusDto response = orderStatusService.getById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<OrderStatusDto> postOrderStatus(@RequestBody OrderStatus orderStatus) {
        OrderStatusDto createdOrderStatus = orderStatusService.post(orderStatus);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrderStatus);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<OrderStatusDto> patchOrderStatus(@PathVariable Long id, @RequestBody OrderStatus orderStatus) throws ResourceNotFoundException {
        OrderStatusDto updatedOrderStatus = orderStatusService.patch(id, orderStatus);
        return ResponseEntity.ok(updatedOrderStatus);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrderStatus(@PathVariable Long id) throws ResourceNotFoundException {
        orderStatusService.delete(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("OrderStatus deleted");
    }


}

