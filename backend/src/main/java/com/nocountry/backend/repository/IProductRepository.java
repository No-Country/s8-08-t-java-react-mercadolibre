package com.nocountry.backend.repository;

import com.nocountry.backend.model.entity.Brand;
import com.nocountry.backend.model.entity.Category;
import com.nocountry.backend.model.entity.Product;
import com.nocountry.backend.model.entity.Subcategory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findByUser_id(int id);

    List<Product> findByCategory(Category category);

    List<Product> findByTitleContainingIgnoreCase(String productName);

    List<Product> findBySubcategory(Subcategory subcategory);

    List<Product> findByBrand(Brand brand);

    @Query("SELECT p FROM Product p ORDER BY p.id DESC")
    List<Product> findByOrderByIdDesc(Pageable pageable);

    List<Product> findByDiscountGreaterThan(int i);

    List<Product> findByTitle(String productName);

    @Query("SELECT p FROM Product p WHERE LOWER(p.title) LIKE %:productName%")
    List<Product> findBySimilarName(@Param("productName") String productName);

    @Query("SELECT p FROM Product p ORDER BY p.id DESC")
    List<Product> findTopNByOrderByIdDesc(Pageable pageable);

    List<Product> findByCategoryName(String categoryName);

    @Query("SELECT p FROM Product p WHERE p.category.name LIKE %:categoryName%")
    List<Product> findBySimilarCategoryName(@Param("categoryName") String categoryName);
}
