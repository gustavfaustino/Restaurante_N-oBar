package com.nobar.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "itenspedido")
public class ItensPedido {

    //Definição das colunas nas tabelas com PK e FK setadas

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_itens_pedido", nullable = false)
    private int id_itens_pedido;

    @ManyToOne
    @JoinColumn(name = "id_pedido", nullable = false)
    private Pedidos id_pedido;

    @ManyToOne
    @JoinColumn(name = "id_item", nullable = false)
    private ItensMenu id_item;

    @Column(name = "quantidade_item", nullable = false)
    private int quantidade_item;

    @Column(name = "preco_total_item", nullable = false, precision = 10, scale = 2)
    private BigDecimal preco_total_item;

    //Getters and Setters
}
