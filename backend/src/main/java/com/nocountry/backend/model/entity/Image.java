package com.nocountry.backend.model.entity;

import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "IMAGES")
@Entity
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IMAGE_ID")
    private Integer id;

    @Column(name = "IMAGE_URL")
    private String imageUrl;

    @Column(name = "PRODUCT_ID")
    private Integer productFk;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRODUCT_ID", referencedColumnName = "PRODUCT_ID",
            insertable = false, updatable = false)
    private Product product;
}

