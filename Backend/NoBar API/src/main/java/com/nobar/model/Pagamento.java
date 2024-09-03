package com.nobar.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "pagamento")
public class Pagamento {

    //Definição das colunas nas tabelas com PK e FK setadas

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pagamento", nullable = false)
    private int id_pagamento;

    @OneToOne
    @JoinColumn(name = "id_pedido", nullable = false)
    private Pedidos id_pedido;

    @Column(name = "data_pagamento", nullable = false)
    private LocalDateTime data_pagamento;

    @Column(name = "valor_pago", nullable = false, precision = 10, scale = 2)
    private BigDecimal valor_pago;

    @Enumerated(EnumType.STRING)
    @Column(name = "metodo_pagamento", nullable = false)
    private MetodoPagamento metodo_pagamento;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_pagamento", nullable = false)
    private StatusPagamento status_pagamento;

    // Métodos enum das colunas metodo de pagamento e status de pagamento

    private enum MetodoPagamento {
        Dinheiro,
        Crédito,
        Débito,
        Pix
    }

    private enum StatusPagamento {
        Pendente,
        Concluído,
        Cancelado
    }

    //Getters and Setters
}
