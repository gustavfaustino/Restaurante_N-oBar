// services/authService.js

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const registrarUsuario = async (dadosUsuario) => {
    try {
        const salt = await bcrypt.genSalt(10);
        dadosUsuario.senha = await bcrypt.hash(dadosUsuario.senha, salt);

        const usuario = await prisma.user.create({
            data: dadosUsuario,
        });
        return usuario;
    } catch (error) {
        throw error;
    }
};

const autenticarUsuario = async (email, senha) => {
    try {
        const usuario = await prisma.user.findUnique({
            where: { email }
        });
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (!senhaCorreta) {
            throw new Error('Senha incorreta');
        }

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET);
        return token;
    } catch (error) {
        throw error;
    }
};

export default {
    registrarUsuario,
    autenticarUsuario
}