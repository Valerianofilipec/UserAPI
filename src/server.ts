import express from 'express'
import cors from 'cors'
import {router} from './routes'
import { connectdb } from './database/connectDB'

connectdb(); // conexão à base de dados

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3333, () => console.log("Pai tá ON"))