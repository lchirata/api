const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;

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
        preco: request.body.preco
    });

    response.json(produto);
})


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
