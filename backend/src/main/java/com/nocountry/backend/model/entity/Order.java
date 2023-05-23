package com.nocountry.backend.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Entity
@Table(name = "ORDERS")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;

    @Column(name = "DATE", nullable = false)
    @NonNull
    private Date date;

    @ManyToOne(cascade = CascadeType.MERGE,fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "USER_ID", nullable = false)
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    @NonNull
    @Builder.Default
    private User user=new User();

    @ManyToOne(cascade = CascadeType.MERGE,fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "SHIPPING_ADDRESS_ID", nullable = false)
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    @NonNull
    @Builder.Default
    private Address shippingAddress=new Address();

    @Column(name = "ORDER_TOTAL")
    private double orderTotal;

    @ManyToOne(cascade = CascadeType.MERGE,fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "SHIPPING_METHOD_ID", nullable = false)
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    @NonNull
    @Builder.Default
    private ShippingMethod shippingMethod=new ShippingMethod();


    @ManyToOne(cascade = CascadeType.MERGE,fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ORDER_STATUS_ID", nullable = false)
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    @NonNull
    @Builder.Default
    private OrderStatus orderStatus=new OrderStatus();


}
