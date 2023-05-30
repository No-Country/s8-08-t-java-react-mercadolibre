package com.nocountry.backend.model.entity;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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
    @Column(name = "ORDER_STATUS_ID")
    private Long id;
    @Column(name = "STATUS", length = 350, nullable = false)
    @NonNull
    @Builder.Default
    private String status="Default status";

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "orderStatus")
    List<Order> orders;

}
