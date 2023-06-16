'use strict';
import { Router } from "express";

const loginRoutes = Router();

loginRoutes.get('/login', (req, resp, next) => {
    resp.send('Tela Login');
});

loginRoutes.post('/login', (req, resp, next) => {
    resp.json({ 
        message: 'Login funcionando!',
        body: req.body
    });
});

export default loginRoutes;