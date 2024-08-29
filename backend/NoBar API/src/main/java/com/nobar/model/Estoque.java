package com.nobar.model;

import jakarta.persistence.*;

@Entity
@Table(name = "estoque")
public class Estoque {

    //Definição das colunas nas tabelas com PK e FK setadas

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_estoque", nullable = false)
    private int id_estoque;

    @Column(name = "nome_produto", nullable = false, length = 255)
    private String nome_produto;

    @Column(name = "quantidade_disponivel", nullable = false)
    private int quantidade_disponivel;

    @Column(name = "unidade_medida", nullable = false, length = 50)
    private String unidade_medida;

    @ManyToOne
    @JoinColumn(name = "id_item", nullable = false)
    private ItensMenu id_item;

    //Getters and Setters
}
