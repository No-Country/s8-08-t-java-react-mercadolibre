package com.nocountry.backend.model.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "PRODUCTS")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_ID")
    private Integer id;
    private String title;
    private Double price;
    private Integer stock;

    private Integer numberQuotas;

    @Transient
    private Double priceQuotas;

    private String description;
    private String descriptionRelevant;
    private String listColors;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Category_id")
    private Category category;

    @OneToMany(fetch = FetchType.LAZY,
            mappedBy = "product",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<Image> images;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

}

