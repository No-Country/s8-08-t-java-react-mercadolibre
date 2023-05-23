package com.nocountry.backend.model.entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "ORDER_STATUS")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class OrderStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;
    @Column(name = "STATUS", length = 350, nullable = false)
    @NonNull
    @Builder.Default
    private String status="Default status";

}
