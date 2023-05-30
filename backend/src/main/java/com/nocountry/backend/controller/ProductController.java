package com.nocountry.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nocountry.backend.dto.category.CategoryDto;
import com.nocountry.backend.dto.image.ImageDto;
import com.nocountry.backend.dto.product.ProductDto;
import com.nocountry.backend.dto.product.ProductListGetDto;
import com.nocountry.backend.model.entity.Category;
import com.nocountry.backend.model.entity.Image;
import com.nocountry.backend.model.entity.Product;
import com.nocountry.backend.model.entity.User;
import com.nocountry.backend.repository.IUserRepositoryJpa;
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
    private IProductRepository IProductRepository;
    @Autowired
    private ICategoryRepository ICategoryRepository;
    @Autowired
    private IUserRepositoryJpa userRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    @Autowired
    private IProductService productService;


    @GetMapping("")
    private ResponseEntity<List<ProductListGetDto>> findAllProducts() {
        return new ResponseEntity<>(this.productService.findAllProduct(), HttpStatus.OK);
    }


    //todo Crear Producto con imgenes y categoria apartir de su usuario********************************
    @PostMapping("/product/img/{userId}")
    public ResponseEntity<?> createProduct(
            @RequestParam("files") MultipartFile[] files,
            @RequestParam("product") String productJson,
            @PathVariable("userId") Integer userId) {

        // Verificar si el usuario existe
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            // Manejar el caso de usuario no encontrado
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
        }
        // Convertir el JSON del producto a un objeto ProductDTO
        ObjectMapper objectMapper = new ObjectMapper();
        ProductDto productDTO;
        try {
            productDTO = objectMapper.readValue(productJson, ProductDto.class);
        } catch (JsonProcessingException e) {
            // Manejar la excepción
            // Por ejemplo, puedes devolver una respuesta de error o registrar el error
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid product JSON");
        }
        Category category = ICategoryRepository.findById(productDTO.getCategory().getId()).orElse(null);
        if (category == null) {
            // Manejar el caso de categoría no encontrada
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Category not found");
        }

        // Crear el objeto Product a partir del ProductDTO
        Product product = Product.builder()
                .title(productDTO.getName())
                .price(productDTO.getPrice())
                .stock(productDTO.getStock())
                .description(productDTO.getDescription())
                .category(category)
                .user(user)
                .build();

        // Verificar si se enviaron archivos de imágenes
        if (files != null && files.length > 0) {
            List<Image> images = new ArrayList<>();

            // Iterar sobre los archivos de imágenes
            for (MultipartFile file : files) {
                // Validar y procesar el archivo
                if (!isValidImageFile(file)) {
                    // Manejar el archivo inválido
                    // Por ejemplo, puedes devolver una respuesta de error o saltar al siguiente archivo
                    continue;
                }

                // Crear el objeto Image
                Image image = new Image();
//                try {
                String imageUrl = cloudinaryService.upload(file);
                image.setImageUrl(imageUrl);
//                } catch (IOException e) {
//                    // Manejar la excepción
//                    // Por ejemplo, puedes devolver una respuesta de error o registrar el error
//                    continue;
//                }

                image.setProduct(product);
                images.add(image);
            }

            // Asignar las imágenes al producto
            product.setImages(images);
        }

        // Guardar el producto en la base de datos
        Product savedProduct = IProductRepository.save(product);

        // Crear la respuesta
        ProductDto savedProductDto = new ProductDto();
        savedProductDto.setName(savedProduct.getTitle());
        savedProductDto.setPrice(savedProduct.getPrice());
        savedProductDto.setStock(savedProduct.getStock());
        savedProductDto.setDescription(savedProduct.getDescription());
        // Crear el objeto CategoryDTO y asignar los valores
        CategoryDto categoryDTO = new CategoryDto();
        categoryDTO.setId(savedProduct.getCategory().getId());
        categoryDTO.setName(savedProduct.getCategory().getName());
        savedProductDto.setCategory(categoryDTO);
        List<ImageDto> imageDtoList = new ArrayList<>();
        for (Image image : savedProduct.getImages()) {
            ImageDto imageDTO = new ImageDto();
            imageDTO.setId(image.getId());
            imageDTO.setImageUrl(image.getImageUrl());

            imageDtoList.add(imageDTO);
        }
        savedProductDto.setImages(imageDtoList);

        // Devolver la respuesta con el producto creado y su ID
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProductDto);
    }

    // Método para validar el archivo de imagen
    private boolean isValidImageFile(MultipartFile file) {
        // Implementa tu lógica de validación aquí
        // Por ejemplo, puedes verificar el tipo de archivo, el tamaño máximo, etc.
        return true;
    }

    //todo Trae el producto con su informacion***********************************

    @GetMapping("/product/{id}")
    public ResponseEntity<?> getProduct(@PathVariable Integer id) {
        // Buscar el producto por ID en la base de datos
        Optional<Product> optionalProduct = IProductRepository.findById(id);
        if (optionalProduct.isPresent()) {
            // Convertir el producto a un objeto ProductDTO
            Product product = optionalProduct.get();
            ProductDto productDTO = new ProductDto();
            productDTO.setName(product.getTitle());
            productDTO.setPrice(product.getPrice());
            productDTO.setStock(product.getStock());
            productDTO.setDescription(product.getDescription());

            // Obtener la categoría del producto
            Category category = product.getCategory();
            if (category != null) {
                CategoryDto categoryDTO = new CategoryDto();
                categoryDTO.setId(category.getId());
                categoryDTO.setName(category.getName());
                productDTO.setCategory(categoryDTO);
            }

            // Obtener las imágenes del producto
            List<Image> images = product.getImages();
            if (images != null && !images.isEmpty()) {
                List<ImageDto> imageDtoList = new ArrayList<>();
                for (Image image : images) {
                    ImageDto imageDTO = new ImageDto();
                    imageDTO.setId(image.getId());
                    imageDTO.setImageUrl(image.getImageUrl());
                    // Asignar otros valores necesarios de ImageDTO según tus requerimientos
                    imageDtoList.add(imageDTO);
                }
                productDTO.setImages(imageDtoList);
            }

            // Devolver el producto encontrado
            return ResponseEntity.ok(productDTO);
        } else {
            // Si no se encuentra el producto, devolver una respuesta de error
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

    //todo Modifica la informacion del producto por su id***********************************

    @PutMapping("/product/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Integer id, @RequestBody ProductDto updatedProductDto) {
        // Buscar el producto por ID en la base de datos
        Optional<Product> optionalProduct = IProductRepository.findById(id);
        if (optionalProduct.isPresent()) {
            // Obtener el producto existente
            Product product = optionalProduct.get();

            // Actualizar los campos del producto con los valores del objeto ProductDTO actualizado
            product.setTitle(updatedProductDto.getName());
            product.setPrice(updatedProductDto.getPrice());
            product.setStock(updatedProductDto.getStock());
            product.setDescription(updatedProductDto.getDescription());

            // Actualizar la categoría del producto si es necesario
            if (updatedProductDto.getCategory() != null && !product.getCategory().getId().equals(updatedProductDto.getCategory().getId())) {
                Optional<Category> optionalCategory = ICategoryRepository.findById(updatedProductDto.getCategory().getId());
                if (optionalCategory.isPresent()) {
                    product.setCategory(optionalCategory.get());
                } else {
                    // Si no se encuentra la categoría, devolver una respuesta de error
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Category not found");
                }
            }

            // Actualizar las imágenes del producto si se proporcionan
            if (updatedProductDto.getImages() != null) {
                List<Image> updatedImages = new ArrayList<>();

                for (ImageDto imageDTO : updatedProductDto.getImages()) {
                    Image updatedImage = new Image();
                    updatedImage.setImageUrl(imageDTO.getImageUrl());
                    updatedImage.setProduct(product);
                    updatedImages.add(updatedImage);
                }

                product.setImages(updatedImages);
            }

            // Guardar los cambios en la base de datos
            Product savedProduct = IProductRepository.save(product);

            // Devolver el producto actualizado
            return ResponseEntity.ok(savedProduct);
        } else {
            // Si no se encuentra el producto, devolver una respuesta de error
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

    //todo Eliminar el producto por su ID***********************************************

    @DeleteMapping("/product/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
        // Buscar el producto por ID en la base de datos
        Optional<Product> optionalProduct = IProductRepository.findById(id);
        if (optionalProduct.isPresent()) {
            // Eliminar el producto de la base de datos
            IProductRepository.delete(optionalProduct.get());

            // Devolver una respuesta exitosa
            return ResponseEntity.ok().build();
        } else {
            // Si no se encuentra el producto, devolver una respuesta de error
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

}
