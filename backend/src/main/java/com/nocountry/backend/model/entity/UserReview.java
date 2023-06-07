package com.nocountry.backend.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity(name="Users_Reviews")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int ratingValue;
    @Column(name = "COMMENTS", columnDefinition="TEXT", nullable = false)
    @Lob
    private String comments;

    @ManyToOne
    @JoinColumn(name = "Order_items_id")
    private OrderItem item;
}