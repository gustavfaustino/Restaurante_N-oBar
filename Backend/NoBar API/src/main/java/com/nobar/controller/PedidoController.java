package com.nobar.controller;

import com.nobar.model.Pedidos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nobar.services.PedidosService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {

    @Autowired
    private PedidosService pedidosService;

    @GetMapping
    public List<Pedidos> listarPedidos(){
        return pedidosService.listarPedidos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedidos> procurarPedidosPorId(@PathVariable int id){
        Optional<Pedidos> pedido = pedidosService.procurarPedidosPorId(id);
        return pedido.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Pedidos criarPedidos(Pedidos pedidos){
        return pedidosService.criarPedidos(pedidos);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> cancelarPedidos(int id){
        pedidosService.cancelarPedidos(id);
        return ResponseEntity.noContent().build();
    }
}
