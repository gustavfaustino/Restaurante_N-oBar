package com.nobar.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "clientes")
public class Cliente {

    //Definição das colunas nas tabelas com PK e FK setadas

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente", nullable = false)
    private int id_cliente;

    @Column(name = "nome_cliente", nullable = false, length = 255 )
    private String nome_cliente;

    @Column(name = "email_cliente", nullable = false, length = 255 )
    private String email_cliente;

    @Column(name = "tel_cliente", nullable = false, length = 15 )
    private String tel_cliente;

    @Column(name = "data_registro", nullable = false)
    private LocalDate data_registro;

    //Getters and Setters
}
