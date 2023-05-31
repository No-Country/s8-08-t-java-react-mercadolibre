package com.nocountry.backend.model.entity;


import com.nocountry.backend.model.enums.DescriptionEnum;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "descriptions")
public class Description {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "description_id")
    private Long id;

    private String content;

    @Enumerated(EnumType.STRING)
    private DescriptionEnum priority;

    @Column(name = "product_id")
    private Long productId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", referencedColumnName = "product_id",
            insertable = false, updatable = false)
    private Product product;
}
