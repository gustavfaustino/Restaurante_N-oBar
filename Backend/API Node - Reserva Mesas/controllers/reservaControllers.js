// controllers/reservaControllers.js

import reservaService from "../services/reservaService.js";
import prisma from "@prisma/client";

const criarReserva = async (req, res) => {
    try{
        const reserva = await reservaService.criarReserva(req.body);
        res.status(201).json(reserva);
    } catch (error){
        res.status(500).json({error: error.message})
    }
};

const verificaDisponibilidade = async (req, res) => {
    try{
        const { data, horario } = req.body;
        const disponivel = await reservaService.verficaDisponibilidade(new Date(data), horario);
        res.json({ disponivel})
    } catch (error){
        res.status(500).json({error: error.message})
    }
};


const listarReservas = async (req, res) => {
    try{
        const reservas = await reservaService.listarReservas();
        res.json(reservas);
    } catch (error){
        res.status(500).json({error: error.message})
    }
}


export default {
    criarReserva,
    verificaDisponibilidade,
    listarReservas
}