import express from 'express'
import publicRoutes from './routes/public.js'



const app = express()
app.use(express.json())


app.use('/' , publicRoutes)

app.listen(3000, ()=> console.log("Servidor Rodando"))