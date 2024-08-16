package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity                           // this is a model
@Getter
@Setter
public class Person {

    @Id                             // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)     //auto generated id unique
    private Long id;

    private String name;

    private String email;


}
