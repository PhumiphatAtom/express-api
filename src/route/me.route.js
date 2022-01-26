const express = require('express');
const services = require('../controllers/me.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const app = express();

app.get('/', authMiddleware, services.getMe);

app.post('/', services.postMe);

app.post('/profile', services.postProfile);

module.exports = app;
