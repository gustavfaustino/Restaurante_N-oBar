import express from 'express'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET
//rota de reserva
router.post('/reserva', async (req, res) =>{
    try {
    const user = req.body

    await prisma.user.create({
        data : {
            name: user.name,
            telefone: user.telefone,
            data: user.data,
            horario: user.horario,
            email: user.email, 
            qtd_pessoas: user.qtd_pessoas
        }
    })
    res.status(201).json(user)
}
catch (erro){
    res.status(500).json({message: "Erro no servidor, tente novamente"})
}
})
//rota que verifica se ja foi reservado
router.post('/verificar', async (req, res) =>{
    try {
    const userInfo = req.body

    const reserva = await prisma.reserva.findUnique({
        where: {
            AND : [
                {data:userInfo.data },
                {horario:userInfo.horario}
            ]
        }
    })

    if(reserva){
        return res.status(404).json({message: "mesa ja reservada!"})
    }

    const token = jwt.sign({id: user.id, email: user.email, data: user.data, horario: user.horario}, JWT_SECRET)

    res.sendStatus(202).json(token)
    }
    catch(erro){
        res.status(500).json({message: "Erro no servidor, tente novamente"})
    }
})
export default router