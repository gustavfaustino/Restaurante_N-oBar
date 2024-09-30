// services/reservaService.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const criarReserva = async (dadosReserva) => {
    try{
        const reserva = await prisma.reserva.create({ // Adaptado para o Prisma
            data: dadosReserva,
        });
        return reserva;
    } catch (error) {
        throw error;
    }
};

const verficaDisponibilidade = async (data, horario) => {
    try{
        const disponibilidade = await prisma.reserva.findUnique({ // Adaptado para o Prisma
            where: {
                dataReserva: data,
                horarioReserva: horario
            }
        });
        return !disponibilidade;
    } catch (error){
        throw error;
    }
}

const listarReservas = async () => {
    try {
        const reservas = await prisma.reserva.findMany(); // Adaptado para o Prisma
        return reservas;
    } catch (error) {
        throw error;
    }
}



export default {
    criarReserva,
    verficaDisponibilidade,
    listarReservas
}