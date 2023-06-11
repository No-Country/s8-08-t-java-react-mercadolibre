package com.nocountry.backend.controller;

import com.nocountry.backend.dto.brand.BrandDTO;
import com.nocountry.backend.dto.product.*;
import com.nocountry.backend.dto.subcategory.SubcategoryDTO;
import com.nocountry.backend.model.entity.*;
import com.nocountry.backend.dto.category.CategoryDto;
import com.nocountry.backend.dto.image.ImageDto;
import com.nocountry.backend.dto.product.ProductDto;
import com.nocountry.backend.dto.product.ProductListGetDto;
import com.nocountry.backend.model.entity.Category;
import com.nocountry.backend.model.entity.Image;
import com.nocountry.backend.model.entity.Product;
import com.nocountry.backend.repository.IBrandRepository;
import com.nocountry.backend.repository.IUserRepositoryJpa;
import com.nocountry.backend.repository.ICategoryRepository;
import com.nocountry.backend.repository.IProductRepository;
import com.nocountry.backend.service.impl.CloudinaryService;
import com.nocountry.backend.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    private com.nocountry.backend.repository.product_repository.ISubcategoryRepository subcategoryRepository;

    @Autowired
    private IProductService productService;

    @Autowired
    private IBrandRepository IBrandRepository;


    @GetMapping("")
    public ResponseEntity<List<ProductListGetDto>> findAllProducts() {
        return new ResponseEntity<>(this.productService.findAllProduct(), HttpStatus.OK);
    }


    @GetMapping("/details/{productId}")
    public ResponseEntity<ProductDetailGetDto> findByProduct(@PathVariable Integer productId) {
        System.out.println("product " + productId);
        return new ResponseEntity<>(this.productService.findProductById(productId), HttpStatus.OK);
    }

    //todo All product***********************************************

    @GetMapping("/brand")
    @ResponseBody
    public List<ProductsDTO> getAllProducts() {

        List<Product> products = productRepository.findAll();

        List<ProductsDTO> productDTOList = new ArrayList<>();

        for (Product product : products) {
            ProductsDTO productDTO = new ProductsDTO();
            productDTO.setId(product.getId());
            productDTO.setName(product.getTitle());
            productDTO.setPrice(product.getPrice());
            productDTO.setStock(product.getStock());
//            productDTO.setDescription(product.getDescription());
            productDTO.setDiscount(product.getDiscount());
            Double priceDiscount = product.getPriceDiscount();
            if (priceDiscount != null) {
                productDTO.setPriceDiscount(product.getPriceDiscount());
            } else {
                product.setPriceDiscount(product.getPrice() - (product.getPrice() * product.getDiscount()) / 100);
            }
            productDTO.setPriceDiscount(product.getPriceDiscount());
            productDTO.setNumberQuotas(product.getNumberQuotas());
            Double priceQuotas = product.getPriceQuotas();
            if (priceQuotas != null) {
                productDTO.setPriceQuotas(product.getPriceQuotas());
            } else {
                product.setPriceQuotas(product.getPrice() / product.getNumberQuotas());
            }
            productDTO.setPriceQuotas(product.getPriceQuotas());
            CategoryDto categoryDTO = new CategoryDto();
            categoryDTO.setId(product.getCategory().getId());
            categoryDTO.setName(product.getCategory().getName());
            productDTO.setCategory(categoryDTO);
            Brand brand = product.getBrand();
            if (brand != null) {
                BrandDTO brandDTO = new BrandDTO();
                brandDTO.setId(brand.getId());
                brandDTO.setName(brand.getName());
                productDTO.setBrand(brandDTO);
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
            productDTOList.add(productDTO);
        }
        return productDTOList;
    }
    //todo All products by category***********************************************

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<ProductDto>> getProductsByCategory(@PathVariable Integer categoryId) {
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        if (optionalCategory.isPresent()) {
            Category category = optionalCategory.get();
            List<Product> products = productRepository.findByCategory(category);

            List<ProductDto> productDTOList = new ArrayList<>();

            for (Product product : products) {
                ProductDto productDTO = new ProductDto();
                productDTO.setId(product.getId());
                productDTO.setTitle(product.getTitle());
                productDTO.setPrice(product.getPrice());
                productDTO.setStock(product.getStock());
//                productDTO.setDescription(product.getDescription());
                productDTO.setDiscount(product.getDiscount());
                Double priceDiscount = product.getPriceDiscount();
                if (priceDiscount != null) {
                    productDTO.setPriceDiscount(product.getPriceDiscount());
                } else {
                    product.setPriceDiscount(product.getPrice() - (product.getPrice() * product.getDiscount()) / 100);
                }
                productDTO.setPriceDiscount(product.getPriceDiscount());
                productDTO.setNumberQuotas(product.getNumberQuotas());
                Double priceQuotas = product.getPriceQuotas();
                if (priceQuotas != null) {
                    productDTO.setPriceQuotas(product.getPriceQuotas());
                } else {
                    product.setPriceQuotas(product.getPrice() / product.getNumberQuotas());
                }
                productDTO.setPriceQuotas(product.getPriceQuotas());
                CategoryDto categoryDTO = new CategoryDto();
                categoryDTO.setId(product.getCategory().getId());
                categoryDTO.setName(product.getCategory().getName());
                productDTO.setCategory(categoryDTO);
                Subcategory subcategory = product.getSubcategory();
                if (subcategory != null) {
                    SubcategoryDTO subcategoryDTO = new SubcategoryDTO();
                    subcategoryDTO.setId(subcategory.getId());
                    subcategoryDTO.setName(subcategory.getName());
                    productDTO.setSubcategory(subcategoryDTO);
                }
                Brand brand = product.getBrand();
                if (brand != null) {
                    BrandDTO brandDTO = new BrandDTO();
                    brandDTO.setId(brand.getId());
                    brandDTO.setName(brand.getName());
                    productDTO.setBrand(brandDTO);
                }
                List<ImageDto> imageDTOList = new ArrayList<>();
                for (Image image : product.getImages()) {
                    ImageDto imageDTO = new ImageDto();
                    imageDTO.setId(image.getId());
                    imageDTO.setImageUrl(image.getImageUrl());
                    imageDTOList.add(imageDTO);
                }

                productDTO.setImages(imageDTOList);


                productDTOList.add(productDTO);
            }

            return ResponseEntity.ok(productDTOList);
        } else {
            List<ProductDto> emptyList = new ArrayList<>();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(emptyList);
        }
    }

    //todo All products by name***********************************************

    @GetMapping("/name/{productName}")
    public ResponseEntity<?> getProductsByName(@PathVariable String productName) {
        List<Product> products = productRepository.findByTitle(productName);

        if (products.isEmpty()) {
            products = productRepository.findBySimilarName(productName);
        }

        List<ProductDto> productDTOList = new ArrayList<>();

        for (Product product : products) {
            ProductDto productDTO = new ProductDto();
            productDTO.setId(product.getId());
            productDTO.setTitle(product.getTitle());
            productDTO.setPrice(product.getPrice());
            productDTO.setStock(product.getStock());
//            productDTO.setDescription(product.getDescription());
            productDTO.setDiscount(product.getDiscount());
            Double priceDiscount = product.getPriceDiscount();
            if (priceDiscount != null) {
                productDTO.setPriceDiscount(product.getPriceDiscount());
            } else {
                product.setPriceDiscount(product.getPrice() - (product.getPrice() * product.getDiscount()) / 100);
            }
            productDTO.setPriceDiscount(product.getPriceDiscount());
            productDTO.setNumberQuotas(product.getNumberQuotas());
            Double priceQuotas = product.getPriceQuotas();
            if (priceQuotas != null) {
                productDTO.setPriceQuotas(product.getPriceQuotas());
            } else {
                product.setPriceQuotas(product.getPrice() / product.getNumberQuotas());
            }
            productDTO.setPriceQuotas(product.getPriceQuotas());
            CategoryDto categoryDTO = new CategoryDto();
            Category category = product.getCategory();
            if (category != null) {
                categoryDTO.setId(product.getCategory().getId());
                categoryDTO.setName(product.getCategory().getName());
            }
            productDTO.setCategory(categoryDTO);
            SubcategoryDTO subcategoryDTO = new SubcategoryDTO();
            Subcategory subcategory = product.getSubcategory();
            if (subcategory != null) {
                subcategoryDTO.setId(product.getSubcategory().getId());
                subcategoryDTO.setName(product.getSubcategory().getName());
            }
            productDTO.setSubcategory(subcategoryDTO);
            BrandDTO brandDTO = new BrandDTO();
            Brand brand = product.getBrand();
            if (brand != null) {
                brandDTO.setName(brand.getName());
                brandDTO.setId(brand.getId());
            }
            List<ImageDto> imageDTOList = new ArrayList<>();

            for (Image image : product.getImages()) {
                ImageDto imageDTO = new ImageDto();
                imageDTO.setId(image.getId());
                imageDTO.setImageUrl(image.getImageUrl());
                imageDTOList.add(imageDTO);
            }

            productDTO.setImages(imageDTOList);

            productDTOList.add(productDTO);
        }

        if (productDTOList.isEmpty()) {
            return ResponseEntity.ok(new ArrayList<>());
        } else {
            return ResponseEntity.ok(productDTOList);
        }
    }

    //todo All products by name the category***********************************************

    @GetMapping("/category/name/{categoryName}")
    public ResponseEntity<?> getProductsByCategoryName(@PathVariable String categoryName) {
        List<Product> products = productRepository.findByCategoryName(categoryName);

        if (products.isEmpty()) {
            products = productRepository.findBySimilarCategoryName(categoryName);
        }

        List<ProductDto> productDTOList = new ArrayList<>();

        for (Product product : products) {
            ProductDto productDTO = new ProductDto();
            productDTO.setId(product.getId());
            productDTO.setTitle(product.getTitle());
            productDTO.setPrice(product.getPrice());
            productDTO.setStock(product.getStock());
//            productDTO.setDescription(product.getDescription());
            productDTO.setDiscount(product.getDiscount());
            Double priceDiscount = product.getPriceDiscount();
            if (priceDiscount != null) {
                productDTO.setPriceDiscount(product.getPriceDiscount());
            } else {
                product.setPriceDiscount(product.getPrice() - (product.getPrice() * product.getDiscount()) / 100);
            }
            productDTO.setPriceDiscount(product.getPriceDiscount());
            productDTO.setNumberQuotas(product.getNumberQuotas());
            Double priceQuotas = product.getPriceQuotas();
            if (priceQuotas != null) {
                productDTO.setPriceQuotas(product.getPriceQuotas());
            } else {
                product.setPriceQuotas(product.getPrice() / product.getNumberQuotas());
            }
            productDTO.setPriceQuotas(product.getPriceQuotas());
            CategoryDto categoryDTO = new CategoryDto();
            Category category = product.getCategory();
            if (category != null) {
                categoryDTO.setId(product.getCategory().getId());
                categoryDTO.setName(product.getCategory().getName());
            }
            productDTO.setCategory(categoryDTO);
            SubcategoryDTO subcategoryDTO = new SubcategoryDTO();
            Subcategory subcategory = product.getSubcategory();
            if (subcategory != null) {
                subcategoryDTO.setId(product.getSubcategory().getId());
                subcategoryDTO.setName(product.getSubcategory().getName());
            }
            productDTO.setSubcategory(subcategoryDTO);
            BrandDTO brandDTO = new BrandDTO();
            Brand brand = product.getBrand();
            if (brand != null) {
                brandDTO.setName(brand.getName());
                brandDTO.setId(brand.getId());
            }
            List<ImageDto> imageDTOList = new ArrayList<>();

            for (Image image : product.getImages()) {
                ImageDto imageDTO = new ImageDto();
                imageDTO.setId(image.getId());
                imageDTO.setImageUrl(image.getImageUrl());
                imageDTOList.add(imageDTO);
            }

            productDTO.setImages(imageDTOList);

            productDTOList.add(productDTO);
        }

        if (productDTOList.isEmpty()) {
            String message = "No se encontraron productos en la categoría: " + categoryName;
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
        } else {
            return ResponseEntity.ok(productDTOList);
        }
    }

    //todo All products by subcategory***********************************************

    @GetMapping("/subcategory/{subcategoryId}")
    public ResponseEntity<List<ProductDto>> getProductsBySubcategory(@PathVariable Integer subcategoryId) {
        Optional<Subcategory> optionalSubcategory = subcategoryRepository.findById(subcategoryId);
        if (optionalSubcategory.isPresent()) {
            Subcategory subcategory = optionalSubcategory.get();
            List<Product> products = productRepository.findBySubcategory(subcategory);
            List<ProductDto> productDTOList = new ArrayList<>();

            for (Product product : products) {
                ProductDto productDTO = new ProductDto();
                productDTO.setId(product.getId());
                productDTO.setTitle(product.getTitle());
                productDTO.setPrice(product.getPrice());
                productDTO.setStock(product.getStock());
//                productDTO.setDescription(product.getDescription());
                productDTO.setDiscount(product.getDiscount());
                Double priceDiscount = product.getPriceDiscount();
                if (priceDiscount != null) {
                    productDTO.setPriceDiscount(product.getPriceDiscount());
                } else {
                    product.setPriceDiscount(product.getPrice() - (product.getPrice() * product.getDiscount()) / 100);
                }
                productDTO.setPriceDiscount(product.getPriceDiscount());
                productDTO.setNumberQuotas(product.getNumberQuotas());
                Double priceQuotas = product.getPriceQuotas();
                if (priceQuotas != null) {
                    productDTO.setPriceQuotas(product.getPriceQuotas());
                } else {
                    product.setPriceQuotas(product.getPrice() / product.getNumberQuotas());
                }
                productDTO.setPriceQuotas(product.getPriceQuotas());
                CategoryDto categoryDTO = new CategoryDto();
                Category category = product.getCategory();
                if (category != null) {
                    categoryDTO.setId(product.getCategory().getId());
                    categoryDTO.setName(product.getCategory().getName());
                }
                productDTO.setCategory(categoryDTO);
                SubcategoryDTO subcategoryDTO = new SubcategoryDTO();
                Subcategory subcategories = product.getSubcategory();
                if (subcategories != null) {
                    subcategoryDTO.setId(product.getSubcategory().getId());
                    subcategoryDTO.setName(product.getSubcategory().getName());
                }
                productDTO.setSubcategory(subcategoryDTO);
                BrandDTO brandDTO = new BrandDTO();
                Brand brand = product.getBrand();
                if (brand != null) {
                    brandDTO.setName(brand.getName());
                    brandDTO.setId(brand.getId());
                }
                List<ImageDto> imageDTOList = new ArrayList<>();

                for (Image image : product.getImages()) {
                    ImageDto imageDTO = new ImageDto();
                    imageDTO.setId(image.getId());
                    imageDTO.setImageUrl(image.getImageUrl());
                    imageDTOList.add(imageDTO);
                }

                productDTO.setImages(imageDTOList);

                productDTOList.add(productDTO);
            }

            return ResponseEntity.ok(productDTOList);
        } else {
            List<ProductDto> emptyList = new ArrayList<>();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(emptyList);
        }
    }

    //todo All products by Brand and name***********************************************

    @GetMapping("/brand/{brandName}")
    public ResponseEntity<List<ProductDto>> getProductsByBrand(@PathVariable String brandName) {
        Brand brand = IBrandRepository.findByName(brandName);
        if (brand != null) {
            List<Product> products = productRepository.findByBrand(brand);
            List<ProductDto> productDTOList = new ArrayList<>();

            for (Product product : products) {
                ProductDto productDTO = new ProductDto();
                productDTO.setId(product.getId());
                productDTO.setTitle(product.getTitle());
                productDTO.setPrice(product.getPrice());
                productDTO.setStock(product.getStock());
//                productDTO.setDescription(product.getDescription());
                productDTO.setDiscount(product.getDiscount());
                Double priceDiscount = product.getPriceDiscount();
                if (priceDiscount != null) {
                    productDTO.setPriceDiscount(product.getPriceDiscount());
                } else {
                    product.setPriceDiscount(product.getPrice() - (product.getPrice() * product.getDiscount()) / 100);
                }
                productDTO.setPriceDiscount(product.getPriceDiscount());
                productDTO.setNumberQuotas(product.getNumberQuotas());
                Double priceQuotas = product.getPriceQuotas();
                if (priceQuotas != null) {
                    productDTO.setPriceQuotas(product.getPriceQuotas());
                } else {
                    product.setPriceQuotas(product.getPrice() / product.getNumberQuotas());
                }
                productDTO.setPriceQuotas(product.getPriceQuotas());
                CategoryDto categoryDTO = new CategoryDto();
                categoryDTO.setId(product.getCategory().getId());
                categoryDTO.setName(product.getCategory().getName());
                productDTO.setCategory(categoryDTO);
                SubcategoryDTO subcategoryDTO = new SubcategoryDTO();
                subcategoryDTO.setId(product.getSubcategory().getId());
                subcategoryDTO.setName(product.getSubcategory().getName());
                productDTO.setSubcategory(subcategoryDTO);
                BrandDTO brandDTO = new BrandDTO();
                brandDTO.setName(product.getBrand().getName());
                brandDTO.setId(product.getBrand().getId());
                productDTO.setBrand(brandDTO);
                List<ImageDto> imageDTOList = new ArrayList<>();

                for (Image image : product.getImages()) {
                    ImageDto imageDTO = new ImageDto();
                    imageDTO.setId(image.getId());
                    imageDTO.setImageUrl(image.getImageUrl());
                    imageDTOList.add(imageDTO);
                }

                productDTO.setImages(imageDTOList);

                productDTOList.add(productDTO);
            }

            return ResponseEntity.ok(productDTOList);
        } else {
            List<ProductDto> emptyList = new ArrayList<>();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(emptyList);
        }
    }

    //todo /products/latest?limit=5 para establecer el limite
    //todo Last products due to defects bring 10 if the parameter is passed send those who call

    @GetMapping("/latest")
    public ResponseEntity<List<ProductDto>> getLatestProducts(@RequestParam(required = false) Integer limit) {
        if (limit == null) {
            limit = 10;
        }

        Pageable pageable = PageRequest.of(0, limit, Sort.by("id").descending());
        List<Product> latestProducts = productRepository.findByOrderByIdDesc(pageable);


        List<ProductDto> latestProductDTOs = new ArrayList<>();
        for (Product product : latestProducts) {
            ProductDto productDTO = new ProductDto();
            productDTO.setId(product.getId());
            productDTO.setTitle(product.getTitle());
            productDTO.setPrice(product.getPrice());
            productDTO.setStock(product.getStock());
//            productDTO.setDescription(product.getDescription());
            productDTO.setDiscount(product.getDiscount());


            if (product.getDiscount() != null) {
                productDTO.setPriceDiscount(product.getPrice() - (product.getPrice() * product.getDiscount() / 100));
            }
            productDTO.setNumberQuotas(product.getNumberQuotas());
            if (product.getNumberQuotas() != null) {
                productDTO.setPriceQuotas(product.getPrice() / product.getNumberQuotas());

            }
            CategoryDto categoryDTO = new CategoryDto();
            categoryDTO.setId(product.getCategory().getId());
            categoryDTO.setName(product.getCategory().getName());
            productDTO.setCategory(categoryDTO);
            SubcategoryDTO subcategoryDTO = new SubcategoryDTO();
            Subcategory subcategory = product.getSubcategory();
            if (subcategory != null) {
                subcategoryDTO.setId(product.getSubcategory().getId());
                subcategoryDTO.setName(product.getSubcategory().getName());
            }
            productDTO.setSubcategory(subcategoryDTO);
            BrandDTO brandDTO = new BrandDTO();
            Brand brand = product.getBrand();
            if (brand != null) {
                brandDTO.setName(brand.getName());
                brandDTO.setId(brand.getId());
            }
            productDTO.setBrand(brandDTO);
            List<ImageDto> imageDTOList = new ArrayList<>();

            for (Image image : product.getImages()) {
                ImageDto imageDTO = new ImageDto();
                imageDTO.setId(image.getId());
                imageDTO.setImageUrl(image.getImageUrl());
                imageDTOList.add(imageDTO);
            }

            productDTO.setImages(imageDTOList);

            latestProductDTOs.add(productDTO);
        }


        return ResponseEntity.ok(latestProductDTOs);
    }

    //todo get products with discount

    @GetMapping("/discounted")
    public ResponseEntity<List<ProductDto>> getDiscountedProducts() {
        List<Product> discountedProducts = productRepository.findByDiscountGreaterThan(0);

        List<ProductDto> discountedProductDTOs = new ArrayList<>();
        for (Product product : discountedProducts) {
            ProductDto productDTO = new ProductDto();
            productDTO.setId(product.getId());
            productDTO.setTitle(product.getTitle());
            productDTO.setPrice(product.getPrice());
            productDTO.setStock(product.getStock());
//            productDTO.setDescription(product.getDescription());
            productDTO.setDiscount(product.getDiscount());

            if (product.getDiscount() != null) {
                productDTO.setPriceDiscount(product.getPrice() - (product.getPrice() * product.getDiscount() / 100));
            }

            productDTO.setNumberQuotas(product.getNumberQuotas());
            if (product.getNumberQuotas() != null) {
                productDTO.setPriceQuotas(product.getPrice() / product.getNumberQuotas());

            }

            CategoryDto categoryDTO = new CategoryDto();
            categoryDTO.setId(product.getCategory().getId());
            categoryDTO.setName(product.getCategory().getName());
            productDTO.setCategory(categoryDTO);
            SubcategoryDTO subcategoryDTO = new SubcategoryDTO();
            Subcategory subcategory = product.getSubcategory();
            if (subcategory != null) {
                subcategoryDTO.setId(product.getSubcategory().getId());
                subcategoryDTO.setName(product.getSubcategory().getName());
            }
            productDTO.setSubcategory(subcategoryDTO);
            BrandDTO brandDTO = new BrandDTO();
            Brand brand = product.getBrand();
            if (brand != null) {
                brandDTO.setName(brand.getName());
                brandDTO.setId(brand.getId());
            }
            List<ImageDto> imageDTOList = new ArrayList<>();

            for (Image image : product.getImages()) {
                ImageDto imageDTO = new ImageDto();
                imageDTO.setId(image.getId());
                imageDTO.setImageUrl(image.getImageUrl());
                imageDTOList.add(imageDTO);
            }

            productDTO.setImages(imageDTOList);

            discountedProductDTOs.add(productDTO);
        }

        return ResponseEntity.ok(discountedProductDTOs);
    }

//todo Create all product ********************************

//    @PostMapping("/img/{userId}")
//    public ResponseEntity<?> createProduct(
//            @RequestParam("files") MultipartFile[] files,
//            @RequestParam("product") String productJson,
//            @PathVariable("userId") Integer userId) {
//
//
//        User user = userRepository.findById(userId).orElse(null);
//        if (user == null) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
//        }
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        ProductDto productDTO;
//        try {
//            productDTO = objectMapper.readValue(productJson, ProductDto.class);
//        } catch (JsonProcessingException e) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid product JSON");
//        }
//        Category category = categoryRepository.findById(productDTO.getCategory().getId()).orElse(null);
//        if (category == null) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Category not found");
//        }
//
//        Subcategory subcategory = ISubcategoryRepository.findById(productDTO.getSubcategory().getId()).orElse(null);
//        if (subcategory == null) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("SubCategory not found");
//        }
//
//        Brand brand = IBrandRepository.findByName(productDTO.getBrand().getName());
//        if (brand == null) {
//            brand = Brand.builder()
//                    .name(productDTO.getBrand().getName())
//                    .build();
//            brand = IBrandRepository.save(brand);
//        }
//
//        Product product = Product.builder()
//                .title(productDTO.getTitle())
//                .price(productDTO.getPrice())
//                .stock(productDTO.getStock())
//                .description(productDTO.getDescription())
//                .discount(productDTO.getDiscount())
//                .numberQuotas(productDTO.getQuoteQuantity())
//                .category(category)
//                .subcategory(subcategory)
//                .brand(brand)
//                .user(user)
//                .build();
//
//        if (productDTO.getQuoteQuantity() != 0 && productDTO.getQuoteQuantity() != null) {
//            double quoteQuantity = productDTO.getQuoteQuantity();
//            double price = productDTO.getPrice();
//            Double priceQuote = (price / quoteQuantity);
//            DecimalFormat decimalFormat = new DecimalFormat("#.00"); // Formato de dos decimales
//            String formattedPriceDiscount = decimalFormat.format(priceQuote);
//            product.getPriceQuotas();
//        }
//
//        if (productDTO.getDiscount() != 0 && productDTO.getDiscount() != null) {
//            double discount = productDTO.getDiscount();
//            double price = productDTO.getPrice();
//            double priceDiscount = price - (price * (discount / 100));
//            DecimalFormat decimalFormat = new DecimalFormat("#.00"); // Formato de dos decimales
//            String formattedPriceDiscount = decimalFormat.format(priceDiscount);
//            product.setPriceDiscount(Double.parseDouble(formattedPriceDiscount));
//        }
//
//
//        if (files != null && files.length > 0) {
//            List<Image> images = new ArrayList<>();
//
//            for (MultipartFile file : files) {
//
//                if (!isValidImageFile(file)) {
//                    continue;
//                }
//
//                Image image = new Image();
//                String imageUrl = cloudinaryService.upload(file);
//                image.setImageUrl(imageUrl);
//
//                image.setProduct(product);
//                images.add(image);
//            }
//
//            product.setImages(images);
//        }
//
//        Product savedProduct = productRepository.save(product);
//
//        ProductDto savedProductDTO = new ProductDto();
//
//        savedProductDTO.setTitle(savedProduct.getTitle());
//        savedProductDTO.setPrice(savedProduct.getPrice());
//        savedProductDTO.setStock(savedProduct.getStock());
//        savedProductDTO.setDescription(savedProduct.getDescription());
//        savedProductDTO.setDiscount(savedProduct.getDiscount());
//        savedProductDTO.setPriceDiscount(savedProduct.getPriceDiscount());
//        savedProductDTO.setQuoteQuantity(savedProduct.getNumberQuotas());
//        savedProductDTO.setQuotePrice(savedProduct.getPriceQuotas());
//        CategoryDto categoryDTO = new CategoryDto();
//        categoryDTO.setId(savedProduct.getCategory().getId());
//        categoryDTO.setName(savedProduct.getCategory().getName());
//        savedProductDTO.setCategory(categoryDTO);
//        SubcategoryDTO subcategoryDTO = new SubcategoryDTO();
//        subcategoryDTO.setId(savedProduct.getSubcategory().getId());
//        subcategoryDTO.setName(savedProduct.getSubcategory().getName());
//        subcategoryDTO.setProductCount(savedProduct.getSubcategory().getProductCount() + 1);
//        savedProductDTO.setSubcategory(subcategoryDTO);
//        BrandDTO brandDTO = new BrandDTO();
//        brandDTO.setId(savedProduct.getBrand().getId());
//        brandDTO.setName(savedProduct.getBrand().getName());
//        savedProductDTO.setBrand(brandDTO);
//        savedProductDTO.setSubcategory(subcategoryDTO);
//        List<ImageDto> imageDTOList = new ArrayList<>();
//        for (Image image : savedProduct.getImages()) {
//            ImageDto imageDTO = new ImageDto();
//            imageDTO.setId(image.getId());
//            imageDTO.setImageUrl(image.getImageUrl());
//
//            imageDTOList.add(imageDTO);
//        }
//        savedProductDTO.setImages(imageDTOList);
//
//        return ResponseEntity.status(HttpStatus.CREATED).body(savedProductDTO);
//    }

//    private boolean isValidImageFile(MultipartFile file) {
//        return true;
//    }


}
