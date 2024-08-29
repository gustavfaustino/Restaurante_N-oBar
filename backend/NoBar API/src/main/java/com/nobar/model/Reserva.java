package com.nobar.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "reservas")
public class Reserva {

    //Definição das colunas nas tabelas com PK e FK setadas

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reserva", nullable = false)
    private int id_reserva;

    @ManyToOne
    @JoinColumn(name = "id_cliente", nullable = false)
    private Cliente id_cliente;

    @ManyToOne
    @JoinColumn(name = "id_mesa", nullable = false)
    private Mesas id_mesa;

    @Column(name = "data_reserva", nullable = false)
    private LocalDateTime dataReserva;

    @Column(name = "hora_reserva", nullable = false)
    private LocalDateTime horaReserva;

    @Column(name = "num_pessoas", nullable = false)
    private int numeroPessoas;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_reserva", nullable = false)
    private StatusReserva statusReserva;

    // Metodo enum do status da reserva

    private enum StatusReserva {
        Pendente,
        Confirmada,
        Cancelada
    }

    //Getters and Setters
}
