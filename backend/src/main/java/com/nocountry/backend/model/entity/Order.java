package com.nocountry.backend.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "ORDERS")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;
    @Column(name = "DATE", nullable = false)
    @NonNull
    private Date date;

    @Column(name = "USER_FK")
    private Long userFk;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_FK", referencedColumnName = "USER_ID",
            insertable = false,
            updatable = false
    )
    private User user;

    @Column(name = "SHIPPING_ADDRESS_FK")
    private Long shippingAddressFk;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SHIPPING_ADDRESS_FK", referencedColumnName = "ADDRESS_ID",
            insertable = false,
            updatable = false
    )
    private Address shippingAddress;

    @Column(name = "ORDER_TOTAL")
    private double orderTotal;

    @Column(name = "SHIPPING_METHOD_FK")
    private Long shippingMethodFk;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SHIPPING_METHOD_FK", referencedColumnName = "SHIPPING_METHOD_ID",
            insertable = false,
            updatable = false
    )
    private ShippingMethod shippingMethod;


    @Column(name = "ORDER_STATUS_FK")
    private Long orderStatusFk;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ORDER_STATUS_FK", referencedColumnName = "ORDER_STATUS_ID",
            insertable = false,
            updatable = false
    )
    private OrderStatus orderStatus;

/*
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "ORDER_ID")
    @Builder.Default
    private Set<OrderItem> items = new HashSet<>();
*/

}
