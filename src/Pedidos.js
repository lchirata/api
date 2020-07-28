const Produto = require('../models/Produto');
const Pedido = require('../models/Pedido');
const PedidoProduto = require('../models/PedidoProduto');

const router = require('express').Router();
const moment = require('moment');

router.post('/', async (request, response)=>{
    let total =0;
    const data = moment().format('DD/MM/YYYY');
    console.log("testeeeeeeeeeeee");
    const body = request.body;
    const id_cliente = body.id_cliente;
    const produtos = body.produtos; //ARRAY DE PRODUTOS DA REQUEST 
    const prods = [];

    //TOTAL DO PEDIDO
    for(const produto of produtos){    
        console.log(produto);
        const prod = await Produto.findOne({
            where: {
                id: produto.id,
            }
        });


        prod.quantidade = produto.quantidade;
        prods.push(prod);
        total = total + (prod.preco * produto.quantidade);
    }

    //CRIA PEDIDO
    const pedido = await Pedido.create({
        cliente_id: id_cliente,
        total: total, 
        data: data, 
    });

    //RELACIONAMENTO PEDIDO-PRODUTO
    for (const prod of prods) {
        await PedidoProduto.create({
            id_pedido: pedido.id, 
            id_produto: prod.id,
            preco: prod.preco,
            quantidade: prod.quantidade
        });
    }

    response.json(pedido);
})

router.get('/', async (request, response)=>{
    const pedidos = await Pedido.findAll();
    response.json(pedidos);
})

module.exports = router;