
package com.nocountry.backend.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


@Entity
@Table(name = "ORDER_ITEMS")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;
    @ManyToOne // (cascade = CascadeType.MERGE,fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "PRODUCT_ID", nullable = false)
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    @NonNull
    @Builder.Default
    private Product product=new Product();
    @ManyToOne //(cascade = CascadeType.MERGE,fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ORDER_ID", nullable = false)
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    @NonNull
    @Builder.Default
    private Order order = new Order();


    @Column(name = "QUANTITY")
    private int quantity;

}