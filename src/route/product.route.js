const express = require('express');
const services = require('../controllers/product.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const app = express();

app.post('/', authMiddleware, services.addProduct);

app.get('/', services.getProducts);

app.get('/:_id', authMiddleware, services.getProductBy_id);

app.put('/:_id', authMiddleware, services.editProductBy_id);

app.delete('/:_id', authMiddleware, services.delProductBy_id);
module.exports = app;
