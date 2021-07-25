import { Router } from "express";
import { UserController } from "./controller/UserController";
const router = Router()

router.get("/teste", (request, response) => response.json({
    "name": "Valeriano Filipe",
    "email":"valeriofilipec@gmail.com",
    "password":"adivinha",
    "username": "JaguarNegro"
}))

//[ ] Uma rota que cadastra um usuário (cada usuário tem nome, email, senha e nome de usuário. As senhas precisam ter pelo menos 6 caracteres). Não é possível cadastrar usuários com o mesmo nome de usuário ou email.
router.put('/user/sign-up', UserController.store);

//[ ] Uma rota para ver um perfil do usuário (essa rota só mostra nome, email e nome de usuário).
//router.get('/user/:email', UserController.show());

//[ ] Uma rota para editar um usuário.
router.post('/user/:id', ()=> console.log('edit user '))

//[ ] Uma rota para deletar um usuário. A rota de deletar não apaga um registro no banco de dados, mas só marca o usuário como deletado(soft delete).
router.delete('user/:id&:password', ()=> console.log('delete a user(password required'))

export {router}