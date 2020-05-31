const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());
 
require('./database/index');

const Produto = require('./models/Produto');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/produtos', async (request, response) => {
    const produtos = await Produto.findAll();
    response.json(produtos);
});

app.get('/produtos/:id', async (request, response)=> {

    const id = request.params.id;

    const query = { 
        where: { 
            id: id, 
        } 
    };

    const produto = await Produto.findOne(query);
    response.json(produto);
});

app.post('/produtos', async (request, response) => {
    const produto =  await Produto.create({
        nome: request.body.nome,
        descricao: request.body.descricao, 
        preco: request.body.preco,
        fornecedor: request.body.fornecedor,
        imagem: request.body.imagem,
    });

    response.json(produto);
})

app.put('/produtos/:id', async (request, response) => {

    const id = request.params.id;

    const query = {
        where: {
            id: id,
        }
    };

    const produto = await Produto.findOne(query);

    const atualizaoRecebida = {
        nome: request.body.nome,
        descricao: request.body.descricao,
        preco: request.body.preco,
    }

    produto.nome = request.body.nome,
    produto.descricao = request.body.descricao,
    produto.preco = request.body.preco,

    await produto.save();
    return produto

})

app.delete('/produtos/:id', async (request, response) => {

    const id = request.params.id;

    const query = {
        where: {
            id: id,
        }
    };

    const produto = await Produto.findOne(query);
    const deletado = await produto.destroy();

    response.json(deletado);
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
