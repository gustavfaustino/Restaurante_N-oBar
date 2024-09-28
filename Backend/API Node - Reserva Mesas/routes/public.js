import express from "express";
import reservaControllers from "../controllers/reservaControllers.js";
import authController from "../controllers/authController.js";

// Rota para criar uma reserva
const router = express.Router();

// CRUD de reservas, rotas públicas
router.post("/reserva", reservaControllers.criarReserva);
router.post("/reserva/disponibilidade", reservaControllers.verificaDisponibilidade);

router.get("/reservas", reservaControllers.listarReservas);

// CRUD de usuários, rotas públicas
router.post("/registrar", authController.registrarUsuario);
router.post("/login", authController.login);

export default router; // Exporta as rotas para serem utilizadas em outro arquivo