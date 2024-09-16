package com.nobar.controller;

import com.nobar.model.Cliente;
import com.nobar.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public List<Cliente> listarTodosClientes(){
        return clienteService.listarTodosClientes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> procurarClientePorId(@PathVariable int id){
        Optional<Cliente> cliente = clienteService.procurarClientePorId(id);
        return cliente.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Cliente criarCliente(@RequestBody Cliente cliente){
        return clienteService.criarCliente(cliente);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarCliente(@PathVariable int id){
        clienteService.deletarPorId(id);
        return ResponseEntity.noContent().build();
    }
}
