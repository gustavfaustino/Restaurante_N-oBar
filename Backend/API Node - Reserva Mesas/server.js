import express from 'express';
import publicRoutes from './routes/public.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/swagger-output.json' assert { type: 'json' };


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configura o Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send('Bem-vindo ao NoBar API! Acesse a documentação em <a href="/api/docs">/api/docs</a>'); // Corrigido para /api/docs
});

// Rotas de autenticação
app.use('/api', publicRoutes); // Adiciona as rotas públicas

// Middleware para tratar erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocorreu um erro no servidor' });
});

// Middleware para tratar rotas inexistentes
app.use((req, res, next) => {
    console.error('Rota não encontrada');
    res.status(404).json({ error: 'Rota não encontrada' });
});

// Inicia o servidor
app.listen(PORT, () => console.log(`Servidor Rodando na porta ${PORT}`)); // Usando a variável PORT
