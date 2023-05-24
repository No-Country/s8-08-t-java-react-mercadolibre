package com.nocountry.backend.controller;

import com.nocountry.backend.dto.product.CategoryDTO;
import com.nocountry.backend.dto.product.ImageDTO;
import com.nocountry.backend.dto.product.ProductDTO;
import com.nocountry.backend.entity.User;
import com.nocountry.backend.entity.product.Image;
import com.nocountry.backend.entity.product.Product;
import com.nocountry.backend.repository.IUserRepositoryJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class UserController {

    @Autowired
    private IUserRepositoryJpa userRepository;

    @GetMapping("/user/{userId}/products")
    public ResponseEntity<?> getUserProducts(@PathVariable("userId") Integer userId) {
        // Verificar si el usuario existe
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            // Manejar el caso de usuario no encontrado
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
        }

        // Obtener la lista de productos asociados al usuario
        List<Product> products = user.getProducts();

        // Crear una lista de ProductDTO para almacenar la información de los productos
        List<ProductDTO> productDTOs = new ArrayList<>();

        // Iterar sobre los productos y crear los objetos ProductDTO
        for (Product product : products) {
            ProductDTO productDTO = new ProductDTO().builder()
                    .name(product.getName())
                    .price(product.getPrice())
                    .stock(product.getStock())
                    .description(product.getDescription())
                    .category(CategoryDTO.builder()
                            .id(product.getCategory().getId())
                            .name(product.getCategory().getName())
                            .build())
                    .images(new ArrayList<>())
                    .build();

            // Obtener las imágenes del producto
            List<Image> images = product.getImages();

            // Iterar sobre las imágenes y crear los objetos ImageDTO
            for (Image image : images) {
                ImageDTO imageDTO = ImageDTO.builder()
                        .url(image.getImageUrl())
                        .build();

                // Agregar el ImageDTO a la lista de imágenes del ProductDTO
                productDTO.getImages().add(imageDTO);
                // Asignar otros atributos del producto según sea necesario
                // ...
            }
            // Agregar el ProductDTO a la lista
            productDTOs.add(productDTO);
        }

        // Devolver la lista de ProductDTO como respuesta
        return ResponseEntity.ok(productDTOs);
    }
}
