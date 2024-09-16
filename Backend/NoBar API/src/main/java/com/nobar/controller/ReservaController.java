package com.nobar.controller;

import com.nobar.model.Reserva;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nobar.services.ReservaService;
import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/reserva")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @GetMapping
    public List<Reserva> listarReservas(){
        return reservaService.listarReservas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reserva> procurarReservaPorId(@PathVariable int id){
        Optional<Reserva> reserva = reservaService.procurarReservasPorId(id);
        return reserva.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Reserva criarReserva(@RequestBody Reserva reserva){
        return reservaService.criarReservas(reserva);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarReserva(@PathVariable int id){
        reservaService.cancelarReservas(id);
        return ResponseEntity.noContent().build();
    }
}
