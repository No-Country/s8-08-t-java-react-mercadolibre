package com.nocountry.backend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private Integer id;
    private String contact;
    private String zipCode;
    private String locality;
    private String street;
    @Column(name = "_NUMBER")
    private String number;
    private String floorApartment;
    private String numStreetInit;
    private String numStreetEnd;
    private Boolean status;
    private String phone;
    private String comment;
    private Boolean residential;


    @Column(name = "PROVINCE_FK",columnDefinition = "varchar(5)")
    private String provinceFk;

    @Column(name = "USER_FK")
    private Integer userFk;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_FK", referencedColumnName = "USER_ID",
            insertable = false,
            updatable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PROVINCE_FK", referencedColumnName = "PROVINCE_ID",
            insertable = false,
            updatable = false)
    private Province province;


}
