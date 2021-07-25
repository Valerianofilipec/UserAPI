const mongodb = require('mongoose'); // importando o mongoose(MongoDB)
require('dotenv').config() // Ocultar Credenciais do DB

const dbconnect = process.env.DB_CONNECT;

function connectdb(){
  mongodb.connect(dbconnect,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
}

export {connectdb};