const Cliente = require('../models/Cliente');
const Pedido = require('../models/Pedido');
const { request, response } = require('express');
const router = require('express').Router();

router.get('/:id', async (request, response) => {
    const cliente = await Cliente.findOne({
        where: {
            id: request.params.id,
        }
    })
    response.json(cliente);
});

router.post('/', async (request, response) =>{
    const cliente = await Cliente.create({
        nome: request.body.nome,
        senha: request.body.senha,
        email:request.body.email,
        endereco:request.body.endereco,
        telefone: request.body.telefone
    });
    response.json(cliente);
});

router.post('/login', async (request, response) =>{
    const cliente = await Cliente.findOne({
        where: {
            email: request.body.email,
            senha: request.body.senha,
        }
    });

    if (cliente) {
        response.json(cliente);
    } else {
        response.status(404).json({mensagem: 'Cliente nao encontrado' });
    }
});

router.get('/', async (request, response) => {
    const clientes = await Cliente.findAll();
    response.json(clientes);
});

router.get('/:id/pedidos', async(request, response) =>{
    const idCliente = request.params.id;

    const pedidos = await Pedido.findAll({
        where : {
            cliente_id: idCliente,
        }
    });

    response.json(pedidos)
});

module.exports = router;