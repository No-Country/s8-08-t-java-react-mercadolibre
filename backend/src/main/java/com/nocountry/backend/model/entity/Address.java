package com.nocountry.backend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ADDRESS")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ADDRESS_ID")
    private Long id;
    private String contact;
    @Column(name = "ZIP_CODE")
    private String zipCode;
    private String locality;
    private String street;
    private String number;

    @Column(name = "STREET_NUMBER")
    private String streetNumber;
    @Column(name = "FLOOR_APARTMENT")

    private String floorApartment;
    @Column(name = "NUM_STREET_INIT")
    private String numStreetInit;

    @Column(name = "NUM_STREET_END")
    private String numStreetEnd;
    private Boolean status;
    private String phone;
    private String comment;
    private Boolean residential;


    @Column(name = "PROVINCE_FK")
    private Integer provinceFk;

    @Column(name = "USER_FK")
    private Long userFk;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_FK", referencedColumnName = "USER_ID",
            insertable = false,
            updatable = false
    )
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PROVINCE_FK", referencedColumnName = "PROVINCE_ID",
            insertable = false,
            updatable = false)
    private Province province;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "shippingAddress")
    List<Order> orders;
}
