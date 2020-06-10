const express = require ('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

const moment = require('moment');

app.use(cors());

require('./database/index');

const Produto = require('./models/Produto');
const Cliente = require('./models/Cliente');
const Pedido = require('./models/Pedido');
const PedidoProduto = require('./models/PedidoProduto');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/produtos/:id', async (request, response) =>{
        
    const id = request.params.id;

    const query = {
        where:{
            id:id,
        }
    };

    const produto = await Produto.findOne(query);
    response.json(produto);
});

app.get('/produtos', async (request, response) =>{
    const produtos = await Produto.findAll();
    response.json(produtos);
    // response.status(200).send('Ola mundo')
});

app.post('/produtos', async (request, response) =>{
    const produto = await Produto.create({
        nome: request.body.nome,
        descricao: request.body.descricao,
        preco: request.body.preco,
        fornecedor: request.body.fornecedor,
        imagem: request.body.imagem
    });
    response.json(produto);
});

app.delete('/produtos/:id', async (request, response) =>{

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

app.post('/clientes', async (request, response) =>{
    const cliente = await Cliente.create({
        nome: request.body.nome,
        email:request.body.email,
        endereco:request.body.endereco,
        telefone: request.body.telefone
    });
    response.json(cliente);
});

app.post('/pedidos', async (request, response)=>{
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

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
