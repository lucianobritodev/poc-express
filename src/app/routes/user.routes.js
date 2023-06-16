'use strict';
import { Router } from "express";

const userRoutes = Router();


//obter
userRoutes.get('/users/:id', (req, resp, next) => {
    resp.json({ 
        message: 'Usuário funcionando!',
        body: {id: req.params['id'],nome: 'João', email: 'joaozinho@email.com'}
    });
});


//listar
userRoutes.get('/users', (req, resp, next) => {    
    console.log(req.path);
    resp.json({ 
        message: 'Usuário funcionando!',
        body: [
            {id: 1, nome: 'Pedro', email: 'pedrin@email.com'},
            {id: 2, nome: 'Maria', email: 'mariazinha@email.com'},
            {id: 3, nome: 'João', email: 'joaozinho@email.com'},
        ]
    });
});


//incluir
userRoutes.post('/users', (req, resp, next) => {
    let obj = req.body;
    obj['id'] = 1;
    resp.status(201).json(obj);
});


//alterar
userRoutes.put('/users/:id', (req, resp, next) => {    
    const id = req.params['id'];
    const object = req.body;
    resp.json({ 
        message: `Usuário ${id} foi atualizado!`,
        body: {
            id,
            name: object.name,
            email: object.email
        }
    });
});


//inativar
userRoutes.patch('/users/:id', (req, resp, next) => {
    const inativo = req.body['inativo'];
    resp.json({ message: inativo ? 'Usuário ativado!' : 'Usuário inativado!' });
});


//excluir
userRoutes.delete('/users/:id', (req, resp, next) => {
    const id = req.params['id'];
    resp.status(204).end();
});


//filtrar
// userRoutes.get('/users', (req, resp, next) => {
//     resp.json({ 
//         message: 'User funcionando!',
//         body: [
//             {id: 1,nome: 'Pedro', email: 'pedrin@email.com'},
//             {id: 2,nome: 'Maria', email: 'mariazinha@email.com'},
//             {id: 3,nome: 'João', email: 'joaozinho@email.com'},
//         ]
//     });
// });

export default userRoutes;