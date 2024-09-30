import express from 'express'
import publicRoutes from './routes/public.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bem-vindo ao NoBar API!') // Rota raiz
})

// Rotas de autenticação
app.use('/api', publicRoutes) // Adiciona as rotas públicas

// Middleware para tratar erros
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Ocorreu um erro no servidor' })
})

// Middleware para tratar rotas inexistentes
app.use((req, res, next) => {
    console.error('Rota não encontrada')
    res.status(404).json({ error: 'Rota não encontrada' })
})

// Inicia o servidor
app.listen(3000, ()=> console.log("Servidor Rodando na porta 3000")) // Inicia o servidor na porta 3000