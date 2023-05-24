package com.nocountry.backend.entity.product;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String imageUrl;


    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}

