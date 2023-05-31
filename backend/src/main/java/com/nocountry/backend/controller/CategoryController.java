package com.nocountry.backend.controller;

import com.nocountry.backend.dto.category.CategoryDto;
import com.nocountry.backend.dto.category.CategoryForSubcategoryDTO;
import com.nocountry.backend.dto.subcategory.SubcategoryDTO;
import com.nocountry.backend.model.entity.Category;
import com.nocountry.backend.repository.ICategoryRepository;
import com.nocountry.backend.model.entity.Subcategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/v1/categories")
public class CategoryController {

    @Autowired
    private ICategoryRepository categoryRepository;


    //todo All Categories***********************************************

    @GetMapping("/all")
    public ResponseEntity<List<CategoryDto>> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        if (categories.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        List<CategoryDto> categoryDTOs = new ArrayList<>();

        for (Category category : categories) {
            CategoryDto categoryDTO = new CategoryDto();
            categoryDTO.setId(category.getId());
            categoryDTO.setName(category.getName());

            categoryDTOs.add(categoryDTO);
        }
        return ResponseEntity.ok(categoryDTOs);
    }

    //todo All categories and children category***********************************************

    @GetMapping("/subcategory")
    public ResponseEntity<List<CategoryForSubcategoryDTO>> getAllCategoriesWithSubcategories() {
        List<Category> categories = categoryRepository.findAll();
        if (categories.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        List<CategoryForSubcategoryDTO> categoryDTOs = new ArrayList<>();

        for (Category category : categories) {
            CategoryForSubcategoryDTO categoryDTO = new CategoryForSubcategoryDTO();
            categoryDTO.setId(category.getId());
            categoryDTO.setName(category.getName());

            List<Subcategory> subcategories = category.getSubcategories();

            if (!subcategories.isEmpty()) {

                List<SubcategoryDTO> subcategoryDTOs = new ArrayList<>();

                for (Subcategory subcategory : subcategories) {
                    SubcategoryDTO subcategoryDTO = new SubcategoryDTO();
                    subcategoryDTO.setId(subcategory.getId());
                    subcategoryDTO.setName(subcategory.getName());


                    subcategoryDTOs.add(subcategoryDTO);
                }

                categoryDTO.setSubcategories(subcategoryDTOs);
            }

            categoryDTOs.add(categoryDTO);
        }

        return ResponseEntity.ok(categoryDTOs);
    }

    //todo Create category***********************************************

    @PostMapping
    public ResponseEntity<String> saveCategory(@RequestBody Category category) {
        Category savedCategory = categoryRepository.save(category);
        if (savedCategory != null) {
            return ResponseEntity.ok("Categoría guardada correctamente");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al guardar la categoría");
        }
    }

    //todo Create children category by category***********************************************

    @PostMapping("/subcategories/{categoryId}")
    public ResponseEntity<?> associateSubcategoriesWithCategory(@PathVariable("categoryId") Integer categoryId, @RequestBody List<SubcategoryDTO> subcategories) {

        Category category = categoryRepository.findById(categoryId).orElse(null);
        if (category == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Category not found");
        }

        for (SubcategoryDTO subcategoryDTO : subcategories) {
            Subcategory subcategory = new Subcategory();
            subcategory.setName(subcategoryDTO.getName());
            subcategory.setCategory(category);
            category.getSubcategories().add(subcategory);
        }

        categoryRepository.save(category);

        return ResponseEntity.ok("Subcategories associated with category successfully");
    }

    //todo Get category by id and get children category ***********************************************

    @GetMapping("/subcategories/{categoryId}")
    public ResponseEntity<List<SubcategoryDTO>> getSubcategoriesByCategory(@PathVariable("categoryId") Integer categoryId) {

        Category category = categoryRepository.findById(categoryId).orElse(null);
        if (category == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        List<Subcategory> subcategories = category.getSubcategories();

        List<SubcategoryDTO> subcategoryDTOs = subcategories.stream()
                .map(subcategory -> new SubcategoryDTO(subcategory.getId(), subcategory.getName(), subcategory.getProductCount()))
                .collect(Collectors.toList());

        return ResponseEntity.ok(subcategoryDTOs);
    }
}