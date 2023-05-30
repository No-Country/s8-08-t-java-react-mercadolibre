package com.nocountry.backend.controller;

import com.nocountry.backend.dto.orderItem.OrderItemDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.OrderItem;
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
    public ResponseEntity<List<OrderItemDto>> getAll() {
        try {
            List<OrderItemDto> response = orderItemService.getAll();
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderItemDto> getById(@PathVariable int id) throws ResourceNotFoundException {
        OrderItemDto response = orderItemService.getById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/")

    public ResponseEntity<OrderItemDto> postOrderItem(@RequestBody OrderItem orderItem) throws ResourceNotFoundException {
        OrderItemDto createdOrderItem = orderItemService.post(orderItem);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrderItem);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<OrderItemDto> patchOrderItem(@PathVariable int id, @RequestBody OrderItem orderItem) throws ResourceNotFoundException {
        OrderItemDto updatedOrderItem = orderItemService.patch(id, orderItem);
        return ResponseEntity.ok(updatedOrderItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrderItem(@PathVariable int id) throws ResourceNotFoundException {
        orderItemService.delete(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("OrderItem deleted");
    }

    @GetMapping("/order/{id}")
    public ResponseEntity<?> getItemsByOrder(@PathVariable int id) {

/*        try {
            List<OrderItemDto> response = orderItemService.getItemsByOrder(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
  */            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<?> getItemsByProduct(@PathVariable int id) {
       /* try {
            List<OrderItemDto> response = orderItemService.getItemsByProduct(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
*/            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

}

