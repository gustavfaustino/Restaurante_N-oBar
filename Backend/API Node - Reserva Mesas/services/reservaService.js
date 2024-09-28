// services/reservaService.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const criarReserva = async (dadosReserva) => {
    try{
        const reserva = await prisma.user.create({ // Adaptado para o Prisma
            data: dadosReserva,
        });
        return reserva;
    } catch (error) {
        throw error;
    }
};

const verficaDisponibilidade = async (data, horario) => {
    try{
        const disponibilidade = await prisma.user.findUnique({ // Adaptado para o Prisma
            where: {
                AND: [
                    {data},
                    {horario}
                ]
            }
        });
        return !disponibilidade;
    } catch (error){
        throw error;
    }
}

const listarReservas = async () => {
    try {
        const reservas = await prisma.user.findMany(); // Adaptado para o Prisma
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