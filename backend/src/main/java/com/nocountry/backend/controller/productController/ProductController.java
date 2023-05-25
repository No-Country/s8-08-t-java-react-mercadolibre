package com.nocountry.backend.controller.productController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nocountry.backend.dto.product.CategoryDTO;
import com.nocountry.backend.dto.product.ImageDTO;
import com.nocountry.backend.dto.product.ProductDTO;
import com.nocountry.backend.entity.User;
import com.nocountry.backend.entity.product.Category;
import com.nocountry.backend.entity.product.Image;
import com.nocountry.backend.entity.product.Product;
import com.nocountry.backend.repository.IUserRepositoryJpa;
import com.nocountry.backend.repository.product_repository.CategoryRepository;
import com.nocountry.backend.repository.product_repository.ProductRepository;
import com.nocountry.backend.service.CloudinaryService;
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
@RequestMapping(value = "/api")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private IUserRepositoryJpa userRepository;

    @Autowired
    private CloudinaryService cloudinaryService;


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
        ProductDTO productDTO;
        try {
            productDTO = objectMapper.readValue(productJson, ProductDTO.class);
        } catch (JsonProcessingException e) {
            // Manejar la excepción
            // Por ejemplo, puedes devolver una respuesta de error o registrar el error
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid product JSON");
        }
        Category category = categoryRepository.findById(productDTO.getCategory().getId()).orElse(null);
        if (category == null) {
            // Manejar el caso de categoría no encontrada
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Category not found");
        }

        // Crear el objeto Product a partir del ProductDTO
        Product product = Product.builder()
                .name(productDTO.getName())
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
                try {
                    String imageUrl = cloudinaryService.upload(file);
                    image.setImageUrl(imageUrl);
                } catch (IOException e) {
                    // Manejar la excepción
                    // Por ejemplo, puedes devolver una respuesta de error o registrar el error
                    continue;
                }

                image.setProduct(product);
                images.add(image);
            }

            // Asignar las imágenes al producto
            product.setImages(images);
        }

        // Guardar el producto en la base de datos
        Product savedProduct = productRepository.save(product);

        // Crear la respuesta
        ProductDTO savedProductDTO = new ProductDTO();
        savedProductDTO.setName(savedProduct.getName());
        savedProductDTO.setPrice(savedProduct.getPrice());
        savedProductDTO.setStock(savedProduct.getStock());
        savedProductDTO.setDescription(savedProduct.getDescription());
        // Crear el objeto CategoryDTO y asignar los valores
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(savedProduct.getCategory().getId());
        categoryDTO.setName(savedProduct.getCategory().getName());
        savedProductDTO.setCategory(categoryDTO);
        List<ImageDTO> imageDTOList = new ArrayList<>();
        for (Image image : savedProduct.getImages()) {
            ImageDTO imageDTO = new ImageDTO();
            imageDTO.setId(image.getId());
            imageDTO.setUrl(image.getImageUrl());

            imageDTOList.add(imageDTO);
        }
        savedProductDTO.setImages(imageDTOList);

        // Devolver la respuesta con el producto creado y su ID
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProductDTO);
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
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            // Convertir el producto a un objeto ProductDTO
            Product product = optionalProduct.get();
            ProductDTO productDTO = new ProductDTO();
            productDTO.setName(product.getName());
            productDTO.setPrice(product.getPrice());
            productDTO.setStock(product.getStock());
            productDTO.setDescription(product.getDescription());

            // Obtener la categoría del producto
            Category category = product.getCategory();
            if (category != null) {
                CategoryDTO categoryDTO = new CategoryDTO();
                categoryDTO.setId(category.getId());
                categoryDTO.setName(category.getName());
                productDTO.setCategory(categoryDTO);
            }

            // Obtener las imágenes del producto
            List<Image> images = product.getImages();
            if (images != null && !images.isEmpty()) {
                List<ImageDTO> imageDTOList = new ArrayList<>();
                for (Image image : images) {
                    ImageDTO imageDTO = new ImageDTO();
                    imageDTO.setId(image.getId());
                    imageDTO.setUrl(image.getImageUrl());
                    // Asignar otros valores necesarios de ImageDTO según tus requerimientos
                    imageDTOList.add(imageDTO);
                }
                productDTO.setImages(imageDTOList);
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
    public ResponseEntity<?> updateProduct(@PathVariable Integer id, @RequestBody ProductDTO updatedProductDTO) {
        // Buscar el producto por ID en la base de datos
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            // Obtener el producto existente
            Product product = optionalProduct.get();

            // Actualizar los campos del producto con los valores del objeto ProductDTO actualizado
            product.setName(updatedProductDTO.getName());
            product.setPrice(updatedProductDTO.getPrice());
            product.setStock(updatedProductDTO.getStock());
            product.setDescription(updatedProductDTO.getDescription());

            // Actualizar la categoría del producto si es necesario
            if (updatedProductDTO.getCategory() != null && !product.getCategory().getId().equals(updatedProductDTO.getCategory().getId())) {
                Optional<Category> optionalCategory = categoryRepository.findById(updatedProductDTO.getCategory().getId());
                if (optionalCategory.isPresent()) {
                    product.setCategory(optionalCategory.get());
                } else {
                    // Si no se encuentra la categoría, devolver una respuesta de error
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Category not found");
                }
            }

            // Actualizar las imágenes del producto si se proporcionan
            if (updatedProductDTO.getImages() != null) {
                List<Image> updatedImages = new ArrayList<>();

                for (ImageDTO imageDTO : updatedProductDTO.getImages()) {
                    Image updatedImage = new Image();
                    updatedImage.setImageUrl(imageDTO.getUrl());
                    updatedImage.setProduct(product);
                    updatedImages.add(updatedImage);
                }

                product.setImages(updatedImages);
            }

            // Guardar los cambios en la base de datos
            Product savedProduct = productRepository.save(product);

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
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            // Eliminar el producto de la base de datos
            productRepository.delete(optionalProduct.get());

            // Devolver una respuesta exitosa
            return ResponseEntity.ok().build();
        } else {
            // Si no se encuentra el producto, devolver una respuesta de error
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

}
