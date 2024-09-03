package com.nobar.model;

import jakarta.persistence.*;

@Entity
@Table(name = "mesas")
public class Mesas {

    //Definição das colunas nas tabelas com PK e FK setadas

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_mesa", nullable = false)
    private int id_mesa;

    @Column(name = "numero_mesa", nullable = false)
    private int numero_mesa;

    @Column(name = "capacidade", nullable = false)
    private int capacidade;

    // Getters and Setters
}
