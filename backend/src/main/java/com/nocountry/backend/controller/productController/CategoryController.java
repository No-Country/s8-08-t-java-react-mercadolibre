package com.nocountry.backend.controller.productController;

import com.nocountry.backend.entity.product.Category;
import com.nocountry.backend.repository.product_repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/category")
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        if (!categories.isEmpty()) {
            return ResponseEntity.ok(categories);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping("/category")
    public ResponseEntity<String> saveCategory(@RequestBody Category category) {
        Category savedCategory = categoryRepository.save(category);
        if (savedCategory != null) {
            return ResponseEntity.ok("Categoría guardada correctamente");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al guardar la categoría");
        }
    }
}
