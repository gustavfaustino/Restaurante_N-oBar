package com.nobar.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "pedidos")
public class Pedidos {

    //Definição das colunas nas tabelas com PK e FK setadas

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedido", nullable = false)
    private int id_pedido;

    @OneToOne
    @JoinColumn(name = "id_reserva", nullable = false)
    private Reserva id_reserva;

    @Column(name = "data_pedido", nullable = false)
    private LocalDateTime data_pedido;

    @Column(name = "total_pedido", nullable = false, precision = 10, scale = 2)
    private BigDecimal total_pedido;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_pedido", nullable = false)
    private StatusPedido status_pedido;

    // Metodo enum do status do pedido

    private enum StatusPedido{
        Preparando,
        Pronto,
        Entregue
    }
}
