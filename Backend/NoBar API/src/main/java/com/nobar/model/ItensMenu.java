package com.nobar.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "itensmenu")
public class ItensMenu {

    //Definição das colunas nas tabelas com PK e FK setadas

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_item", nullable = false)
    private int id_item;

    @Column(name = "nome_item", nullable = false, length = 255)
    private String nomeItem;

    @Column(name = "descricao_item", columnDefinition = "TEXT")
    private String descricao_item;

    @Column(name = "preco_item", nullable = false, precision = 10, scale = 2)
    private BigDecimal precoItem;

    @Column(name = "categoria_item", nullable = false, length = 255)
    private String nome;

    @Column(name = "disponibilidade_item", nullable = false)
    private boolean disponibilidade_item;

    // Getters and Setters
}
