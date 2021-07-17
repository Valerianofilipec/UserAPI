const { response } = require('express');
const express = require('express');

const routes = express.Router();


routes.get('/', (request, response) => (response.json({
    "name": "Valeriano Filipe",
    "email":"valeriofilipec@gmail.com",
    "password":"adivinha",
    "username": "JaguarNegro"
})));


module.exports = routes;