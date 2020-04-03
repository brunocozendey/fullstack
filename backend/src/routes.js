const express = require('express');
const { celebrate, Joi, Segments} = require('celebrate');


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
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),

    })
}), OngController.create);

routes.post('/userspost', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: "Semana Omnistack",
        aluno: "Bruno Cozendey"
    });
});

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().required(),
    })
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })

}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required(),

    }).unknown(),

}),ProfileController.index);

routes.post('/sessions',SessionController.create);

module.exports = routes; //exportar rotas em JS.