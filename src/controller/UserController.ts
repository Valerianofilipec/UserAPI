//index, show, store, update & destroy, são funções basicas de um controller
const User = require('../model/User')

const UserController = {
    //cadastra um usuário (cada usuário tem nome, email, senha e nome de usuário. As senhas precisam ter pelo menos 6 caracteres)
    async store(request, response){ 
        const { name, email, userName, password} = request.body;
        let user = await User.findOne({email, userName});  // verificar a existencia do user, p/ evitar duplicidade 
        if(!user){
            user = await User.create({
                name,
                email,
                userName,
                password,
            });
        }
        return response.json(user);
    },
    //ver um perfil do usuário (essa rota só mostra nome, email e nome de usuário)
    async show(request, response){
        const email = request.params.email;
        const user = await User.findOne(email);
        return response.json(user);
    },

    //editar um usuário
    async update(request, response){
        const user = await User.findOne();
    },

    //deletar um usuário.
    async destroy(request, response){
        //conect db, find the user
        const user = await User.findOne();
        // delete user
        return response.json(user);
    }
}

export {UserController};