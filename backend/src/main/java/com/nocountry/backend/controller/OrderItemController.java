package com.nocountry.backend.controller;

import com.nocountry.backend.dto.orderItem.OrderItemListGetDto;
import com.nocountry.backend.dto.orderItem.OrderItemPostDto;
import com.nocountry.backend.dto.orderItem.OrderItemUpdatePostDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.service.IOrderItemService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orderItem")
@RequiredArgsConstructor
@Tag(name = "OrderItem", description = "Item of Purchase Order")

public class OrderItemController  {

    @Autowired
    IOrderItemService orderItemService;

    @GetMapping()
    public ResponseEntity<List<OrderItemListGetDto>> getAll() {
        try {
            List<OrderItemListGetDto> response = orderItemService.getAll();
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderItemListGetDto> getById(@PathVariable Long id) throws ResourceNotFoundException {
        OrderItemListGetDto response = orderItemService.getById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/")

    public ResponseEntity<OrderItemPostDto> postOrderItem(@RequestBody OrderItemPostDto orderItem) throws ResourceNotFoundException {
        OrderItemPostDto createdOrderItem = orderItemService.post(orderItem);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrderItem);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<OrderItemListGetDto> patchOrderItem(@PathVariable Long id, @RequestBody OrderItemUpdatePostDto orderItemUpdatePostDto) throws ResourceNotFoundException {
        OrderItemListGetDto updatedOrderItem = orderItemService.patch(id, orderItemUpdatePostDto);
        return ResponseEntity.ok(updatedOrderItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrderItem(@PathVariable Long id) throws ResourceNotFoundException {
        orderItemService.delete(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("OrderItem deleted");


    }

    @GetMapping("/order/{id}")
    public ResponseEntity<?> getItemsByOrder (@PathVariable Long id) {

       try {
            List<OrderItemListGetDto> response = orderItemService.getItemsByOrder(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<?> getItemsByProduct(@PathVariable Long id) {
        try {
            List<OrderItemListGetDto> response = orderItemService.getItemsByProduct(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}

