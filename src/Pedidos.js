const Produto = require('../models/Produto');
const Pedido = require('./models/Pedido');
const PedidoProduto = require('./models/PedidoProduto');

const router = require('express').Router();

app.post('/', async (request, response)=>{
    let total =0;
    const data = moment().format('DD/MM/YYYY');

    const body = request.body;
    const id_cliente = body.id_cliente;
    const produtos = body.produtos; //ARRAY DE PRODUTOS DA REQUEST 
    const prods = [];

    //TOTAL DO PEDIDO
    for(const produto of produtos){
        console.log(produto);
        const prod = await Produto.findOne({
            where: {
                id: produto.id_produto,
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

module.exports = router;