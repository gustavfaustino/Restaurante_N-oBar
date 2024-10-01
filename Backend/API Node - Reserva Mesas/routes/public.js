// routes/public.js
import express from "express";
import reservaControllers from "../controllers/reservaControllers.js";
import authController from "../controllers/authController.js";

// Rota para criar uma reserva
const router = express.Router();

/**
 * @swagger
 * /api/reserva:
 *   post:
 *     summary: Cria uma nova reserva
 *     description: Cria uma nova reserva de mesa no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeCliente:
 *                 type: string
 *               telefoneCliente:
 *                 type: string
 *               dataReserva:
 *                 type: string
 *                 format: date
 *               horarioReserva:
 *                 type: string
 *               email:
 *                 type: string
 *               numeroPessoas:
 *                 type: integer
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reserva criada com sucesso.
 *       400:
 *         description: Dados de entrada inválidos.
 */
router.post("/reserva", reservaControllers.criarReserva);

/**
 * @swagger
 * /api/reserva/disponibilidade:
 *   post:
 *     summary: Verifica a disponibilidade para uma nova reserva
 *     description: Verifica se uma mesa está disponível para a data e horário informados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 format: date
 *               horario:
 *                 type: string
 *     responses:
 *       200:
 *         description: Disponibilidade confirmada.
 *       404:
 *         description: Mesa não disponível.
 */
router.post("/reserva/disponibilidade", reservaControllers.verificaDisponibilidade);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Lista todas as reservas
 *     description: Retorna uma lista de todas as reservas cadastradas no sistema.
 *     responses:
 *       200:
 *         description: Lista de reservas retornada com sucesso.
 *       404:
 *         description: Nenhuma reserva encontrada.
 */
router.get("/reservas", reservaControllers.listarReservas);

/**
 * @swagger
 * /api/registrar:
 *   post:
 *     summary: Registra um novo usuário
 *     description: Cria um novo usuário no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso.
 *       400:
 *         description: Dados de entrada inválidos.
 */
router.post("/registrar", authController.registrarUsuario);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Realiza o login do usuário
 *     description: Autentica um usuário no sistema e retorna um token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso, retorna o token.
 *       401:
 *         description: Credenciais inválidas.
 */
router.post("/login", authController.login);

export default router; // Exporta as rotas para serem utilizadas em outro arquivo
