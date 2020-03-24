const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);   //Listar ongs
routes.post('/ongs', OngController.create); // Criar ong

routes.get('/profile', ProfileController.index) // Listar uma ong específica

routes.get('/incidents', IncidentController.index);         // Listar incidentes
routes.post('/incidents', IncidentController.create);       // Criar incidente
routes.delete('/incidents/:id', IncidentController.delete); // Remove um incidente

module.exports = routes;