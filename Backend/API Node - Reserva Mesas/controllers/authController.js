import authService from "../services/authService.js";

const registrarUsuario = async (req, res) => {
    try {
        const usuario = await authService.registrarUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const token = await authService.autenticarUsuario(email, senha);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

export default { registrarUsuario, login };