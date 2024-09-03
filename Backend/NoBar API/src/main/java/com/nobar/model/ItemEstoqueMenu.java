package com.nobar.model;

import jakarta.persistence.*;

@Entity
@Table(name = "itemestoquemenu")
public class ItemEstoqueMenu {

    //Definição das colunas nas tabelas com PK e FK setadas

    @Id
    @ManyToOne
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name = "id_estoque", nullable = false)
    private Estoque id_estoque;

    @ManyToOne
    @JoinColumn(name = "id_item", nullable = false)
    private ItensMenu id_item;

    @Column(name = "quantidade_usada")
    private int quantidade_usada;

    //Getters and Setters
}
