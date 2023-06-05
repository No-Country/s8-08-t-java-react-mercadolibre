
package com.nocountry.backend.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.HashSet;
import java.util.Set;


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
    @Column(name = "ITEM_ID")
    private int id;

    @Column(name = "ORDER_FK")
    private Long orderFk;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ORDER_FK", referencedColumnName = "ID",
            insertable = false,
            updatable = false
    )
    private Order order;

    @Column(name = "PRODUCT_FK")
    private Long productFk;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRODUCT_FK", referencedColumnName = "product_id",
            insertable = false,
            updatable = false
    )
    private Product product;


    @Column(name = "QUANTITY")
    private int quantity;

}