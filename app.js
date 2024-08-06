import express from 'express'
import { sequelize } from './database/conecta.js'
import { Brinquedo } from './models/Brinquedo.js'
import routes from './routes.js'

const app = express()
const port = 3300

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  res.send('Sistema de Cadastro de Brinquedos')
})

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com Banco de Dados realizada com Sucesso');
    await Brinquedo.sync({alter: true})     
    console.log("Tabela de Brinquedos: Ok")
  } catch (error) {
    console.error('Erro ao conectar o banco de dados:', error);
  }  
}
conecta_db()

app.listen(port, () => {
  console.log(`API de Brinqudos Rodando na Porta: ${port}`)
})