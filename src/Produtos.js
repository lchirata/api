const Produto = require('../models/Produto');
const router = require('express').Router();


router.get('/:id', async (request, response) =>{
        
    const id = request.params.id;

    const query = {
        where:{
            id:id,
        }
    };

    const produto = await Produto.findOne(query);
    response.json(produto);
});

router.get('/', async (request, response) =>{
    const produtos = await Produto.findAll();
    response.json(produtos);
    // response.status(200).send('Ola mundo')
});

router.post('/', async (request, response) =>{
    const produto = await Produto.create({
        nome: request.body.nome,
        descricao: request.body.descricao,
        preco: request.body.preco,
        fornecedor: request.body.fornecedor,
        imagem: request.body.imagem
    });
    response.json(produto);
});

router.delete('/:id', async (request, response) =>{

    const id = request.params.id;
    const query ={
        where:{
            id:id,
        }
    }

    const produto = await Produto.findOne(query);
    const deletado = await produto.destroy();

    response.json(deletado);
});

module.exports = router;
