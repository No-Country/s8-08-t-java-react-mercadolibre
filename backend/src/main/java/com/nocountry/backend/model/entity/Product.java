package com.nocountry.backend.model.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
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

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    @Builder.Default
    private Set<OrderItem> items = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "SubCategory_id")
    private Subcategory subcategory;

}

