const Cliente = require('../models/Cliente');
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
        email:request.body.email,
        endereco:request.body.endereco,
        telefone: request.body.telefone
    });
    response.json(cliente);
});

module.exports = router;