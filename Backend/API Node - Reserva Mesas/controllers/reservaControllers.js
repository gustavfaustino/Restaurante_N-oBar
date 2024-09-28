// controllers/reservaControllers.js

import reservaService from "../services/reservaService.js";

const criarReserva = async (req, res) => {
    try{
        const reserva = await reservaService(req.body);
        res.status(201).json(reserva);
    } catch (error){
        res.status(500).json({error: error.message})
    }
};

const verificaDisponibilidade = async (req, res) => {
    try{
        const { data, horario } = req.body;
        const disponivel = await reservaService.verificarDisponibilidade(new Date(data), horario);
        res.json({ disponivel})
    } catch (error){
        res.status(500).json({error: error.message})
    }
};


export default {
    criarReserva,
    verificaDisponibilidade
}