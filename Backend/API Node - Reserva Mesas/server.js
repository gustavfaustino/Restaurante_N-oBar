import express from 'express'
import publicRoutes from './routes/public.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bem-vindo ao NoBar API!') // Rota raiz
})

app.use('/api', publicRoutes) // Adiciona as rotas públicas

app.listen(3000, ()=> console.log("Servidor Rodando na porta 3000")) // Inicia o servidor na porta 3000