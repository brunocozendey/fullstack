const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.send("Hello World! 2");
});

routes.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento: "Semana Omnistack",
        aluno: "Bruno Cozendey"
    });
});

routes.post('/userspost', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: "Semana Omnistack",
        aluno: "Bruno Cozendey"
    });
});

module.exports = routes; //exportar rotas em JS.