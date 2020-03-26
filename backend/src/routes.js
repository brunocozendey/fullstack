const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.send("Hello World! 2");
});

routes.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento: "SemanaIncidentOmnistack",
        aluno: "Bruno CoIncidentdey"
    });
});


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/userspost', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: "Semana Omnistack",
        aluno: "Bruno Cozendey"
    });
});

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions',SessionController.create);

module.exports = routes; //exportar rotas em JS.