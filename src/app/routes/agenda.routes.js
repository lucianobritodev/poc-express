'use strict';
import { Router } from "express";

const agendaRoutes = Router();


//obter
agendaRoutes.get('/agendas/:id', (req, resp, next) => {
    resp.json({ 
        message: 'Agenda funcionando!',
        body: {id: req.params['id'], titulo: 'João', data: 'joaozinho@email.com'}
    });
});


//listar
agendaRoutes.get('/agendas', (req, resp, next) => {    
    console.log(req.path);
    resp.json({ 
        message: 'Agenda funcionando!',
        body: [
            {id: 1, titulo: 'Festa', data: 'ontem'},
            {id: 2, titulo: 'Trabalho', data: 'amanhã'},
            {id: 3, titulo: 'Faculdade', data: 'todo dia'},
        ]
    });
});


//incluir
agendaRoutes.post('/agendas', (req, resp, next) => {
    let obj = req.body;
    obj['id'] = 1;
    resp.status(201).json(obj);
});


//alterar
agendaRoutes.put('/agendas/:id', (req, resp, next) => {    
    const id = req.params['id'];
    const object = req.body;
    resp.json({ 
        message: `Agenda ${id} foi atualizado!`,
        body: {
            id,
            titulo: object.titulo,
            data: object.data
        }
    });
});


//inativar
agendaRoutes.patch('/agendas/:id', (req, resp, next) => {
    const inativo = req.body['inativo'];
    resp.json({ message: inativo ? 'Agenda ativado!' : 'Agenda inativado!' });
});


//excluir
agendaRoutes.delete('/agendas/:id', (req, resp, next) => {
    const id = req.params['id'];
    resp.status(204).end();
});


//filtrar
// agendaRoutes.get('/agendas', (req, resp, next) => {
//     resp.json({ 
//         message: 'User funcionando!',
//         body: [
//             {id: 1,titulo: 'Pedro', email: 'pedrin@email.com'},
//             {id: 2,titulo: 'Maria', email: 'mariazinha@email.com'},
//             {id: 3,titulo: 'João', email: 'joaozinho@email.com'},
//         ]
//     });
// });

export default agendaRoutes;