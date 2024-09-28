// services/reservaService.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const criarReserva = async (dadosReserva) => {
    try{
        const reserva = await prisma.user.create({ // Adaptado para o Prisma
            data: dadosReserva,
        });
        return reserva;
    } catch (erro) {
        throw erro;
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

// TODO: Implementar as rotas de reserva e disponibilidade

export default {
    criarReserva,
    verficaDisponibilidade
}