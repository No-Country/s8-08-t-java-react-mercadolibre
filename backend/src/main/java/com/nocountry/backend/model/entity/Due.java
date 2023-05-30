package com.nocountry.backend.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Dues")
@Getter
@Setter
public class Due {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DUE_ID")
    private Integer id;

    @Column(name = "NUMBER")
    private Integer number;


//    private Double

}
