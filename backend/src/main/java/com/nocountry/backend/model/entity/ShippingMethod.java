package com.nocountry.backend.model.entity;
import jakarta.persistence.*;
import lombok.*;

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
    @Column(name = "ID")
    private int id;
    @Column(name = "NAME", length = 350, nullable = false)
    @NonNull
    @Builder.Default
    private String name="Default Name";

    @Column(name = "PRICE")
    private double price;

}
