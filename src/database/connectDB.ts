const mongodb = require('mongoose'); // importando o mongoose(MongoDB)
require('dotenv').config() // Ocultar Credenciais do DB

function connectdb(){
  mongodb.connect(process.env.DB_CONNECT,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
}

export {connectdb};