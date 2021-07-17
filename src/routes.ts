import { Router } from "express";

const router = Router()

router.get("/teste", (request, response) => response.json({
    "name": "Valeriano Filipe",
    "email":"valeriofilipec@gmail.com",
    "password":"adivinha",
    "username": "JaguarNegro"
}))

export {router}