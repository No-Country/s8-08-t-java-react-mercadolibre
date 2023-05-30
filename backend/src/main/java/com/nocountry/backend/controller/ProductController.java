package com.nocountry.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nocountry.backend.dto.product.*;
import com.nocountry.backend.model.entity.*;
import com.nocountry.backend.dto.category.CategoryDto;
import com.nocountry.backend.dto.image.ImageDto;
import com.nocountry.backend.dto.product.ProductDto;
import com.nocountry.backend.dto.product.ProductListGetDto;
import com.nocountry.backend.model.entity.Category;
import com.nocountry.backend.model.entity.Image;
import com.nocountry.backend.model.entity.Product;
import com.nocountry.backend.model.entity.User;
import com.nocountry.backend.repository.IUserRepositoryJpa;
import com.nocountry.backend.repository.product_repository.SubcategoryRepository;
import com.nocountry.backend.repository.ICategoryRepository;
import com.nocountry.backend.repository.IProductRepository;
import com.nocountry.backend.service.impl.CloudinaryService;
import com.nocountry.backend.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/v1/products")
public class ProductController {

    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private ICategoryRepository categoryRepository;
    @Autowired
    private IUserRepositoryJpa userRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    @Autowired
    private SubcategoryRepository subcategoryRepository;

    @Autowired
    private IProductService productService;


    @GetMapping("")
    private ResponseEntity<List<ProductListGetDto>> findAllProducts() {
        return new ResponseEntity<>(this.productService.findAllProduct(), HttpStatus.OK);
    }

//todo Create all product ********************************

    @PostMapping("/product/img/{userId}")
    public ResponseEntity<?> createProduct(
            @RequestParam("files") MultipartFile[] files,
            @RequestParam("product") String productJson,
            @PathVariable("userId") Integer userId) {


        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
        }

        ObjectMapper objectMapper = new ObjectMapper();
        ProductDto productDTO;
        try {
            productDTO = objectMapper.readValue(productJson, ProductDto.class);
        } catch (JsonProcessingException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid product JSON");
        }
        Category category = categoryRepository.findById(productDTO.getCategory().getId()).orElse(null);
        if (category == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Category not found");
        }

        Subcategory subcategory = subcategoryRepository.findById(productDTO.getSubcategory().getId()).orElse(null);
        if (subcategory == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("SubCategory not found");
        }

        Product product = Product.builder()
                .title(productDTO.getName())
                .price(productDTO.getPrice())
                .stock(productDTO.getStock())
                .description(productDTO.getDescription())
                .category(category)
                .subcategory(subcategory)
                .user(user)
                .build();

        if (files != null && files.length > 0) {
            List<Image> images = new ArrayList<>();

            for (MultipartFile file : files) {

                if (!isValidImageFile(file)) {
                    continue;
                }

                Image image = new Image();
                String imageUrl = cloudinaryService.upload(file);
                image.setImageUrl(imageUrl);

                image.setProduct(product);
                images.add(image);
            }

            product.setImages(images);
        }

        Product savedProduct = productRepository.save(product);

        ProductDto savedProductDTO = new ProductDto();
        savedProductDTO.setName(savedProduct.getTitle());
        savedProductDTO.setPrice(savedProduct.getPrice());
        savedProductDTO.setStock(savedProduct.getStock());
        savedProductDTO.setDescription(savedProduct.getDescription());
        CategoryDto categoryDTO = new CategoryDto();
        categoryDTO.setId(savedProduct.getCategory().getId());
        categoryDTO.setName(savedProduct.getCategory().getName());
        savedProductDTO.setCategory(categoryDTO);
        SubcategoryDTO subcategoryDTO = new SubcategoryDTO();
        subcategoryDTO.setId(savedProduct.getSubcategory().getId());
        subcategoryDTO.setName(savedProduct.getSubcategory().getName());
        subcategoryDTO.setProductCount(savedProduct.getSubcategory().getProductCount() + 1);
        savedProductDTO.setSubcategory(subcategoryDTO);
        List<ImageDto> imageDTOList = new ArrayList<>();
        for (Image image : savedProduct.getImages()) {
            ImageDto imageDTO = new ImageDto();
            imageDTO.setId(image.getId());
            imageDTO.setImageUrl(image.getImageUrl());

            imageDTOList.add(imageDTO);
        }
        savedProductDTO.setImages(imageDTOList);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedProductDTO);
    }

    private boolean isValidImageFile(MultipartFile file) {
        return true;
    }

    //todo Get all product***********************************

    @GetMapping("/product/{id}")
    public ResponseEntity<?> getProduct(@PathVariable Integer id) {

        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            ProductDto productDTO = new ProductDto();
            productDTO.setName(product.getTitle());
            productDTO.setPrice(product.getPrice());
            productDTO.setStock(product.getStock());
            productDTO.setDescription(product.getDescription());

            Category category = product.getCategory();
            if (category != null) {
                CategoryDto categoryDTO = new CategoryDto();
                categoryDTO.setId(category.getId());
                categoryDTO.setName(category.getName());
                productDTO.setCategory(categoryDTO);
            }

            Subcategory subcategory = product.getSubcategory();
            if (subcategory != null) {
                SubcategoryDTO subcategoryDTO = new SubcategoryDTO();
                subcategoryDTO.setId(subcategory.getId());
                subcategoryDTO.setName(subcategory.getName());
                productDTO.setSubcategory(subcategoryDTO);
            }

            List<Image> images = product.getImages();
            if (images != null && !images.isEmpty()) {
                List<ImageDto> imageDTOList = new ArrayList<>();
                for (Image image : images) {
                    ImageDto imageDTO = new ImageDto();
                    imageDTO.setId(image.getId());
                    imageDTO.setImageUrl(image.getImageUrl());
                    imageDTOList.add(imageDTO);
                }
                productDTO.setImages(imageDTOList);
            }

            return ResponseEntity.ok(productDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

    //todo Update product***********************************

    @PutMapping("/product/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Integer id, @RequestBody ProductDto updatedProductDTO) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            product.setTitle(updatedProductDTO.getName());
            product.setPrice(updatedProductDTO.getPrice());
            product.setStock(updatedProductDTO.getStock());
            product.setDescription(updatedProductDTO.getDescription());

            if (updatedProductDTO.getCategory() != null && !product.getCategory().getId().equals(updatedProductDTO.getCategory().getId())) {
                Optional<Category> optionalCategory = categoryRepository.findById(updatedProductDTO.getCategory().getId());
                if (optionalCategory.isPresent()) {
                    product.setCategory(optionalCategory.get());
                } else {
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Category not found");
                }
            }

            if (updatedProductDTO.getImages() != null) {
                List<Image> updatedImages = new ArrayList<>();

                for (ImageDto imageDTO : updatedProductDTO.getImages()) {
                    Image updatedImage = new Image();
                    updatedImage.setImageUrl(imageDTO.getImageUrl());
                    updatedImage.setProduct(product);
                    updatedImages.add(updatedImage);
                }

                product.setImages(updatedImages);
            }

            Product savedProduct = productRepository.save(product);

            return ResponseEntity.ok(savedProduct);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

    //todo Delete product by id***********************************************

    @DeleteMapping("/product/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {

        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();

            productRepository.delete(product);

            Subcategory subcategory = product.getSubcategory();
            subcategory.setProductCount(subcategory.getProductCount() - 1);
            subcategoryRepository.save(subcategory);
            return ResponseEntity.ok("Product deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

    //todo All product***********************************************

    @GetMapping("/products")
    @ResponseBody
    public List<ProductsDTO> getAllProducts() {

        List<Product> products = productRepository.findAll();

        List<ProductsDTO> productDTOList = new ArrayList<>();

        for (Product product : products) {
            ProductsDTO productDTO = new ProductsDTO();
            productDTO.setName(product.getTitle());
            productDTO.setPrice(product.getPrice());
            productDTO.setStock(product.getStock());
            productDTO.setDescription(product.getDescription());

            productDTOList.add(productDTO);
        }
        return productDTOList;
    }
}
