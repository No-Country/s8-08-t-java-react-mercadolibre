package com.nocountry.backend.model.entity;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "SHIPPING_METHODS")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ShippingMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SHIPPING_METHOD_ID")
    private Long id;
    @Column(name = "NAME", length = 350, nullable = false)
    @NonNull
    @Builder.Default
    private String name="Default Name";

    @Column(name = "PRICE")
    private double price;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "shippingMethod")
    List<Order> orders;
}
