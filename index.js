const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;
const Produto = require('./models/Produto');

require('./database/index');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.status(200).send('Olá Mundo')
});

app.post('/produtos', async (request, response) => {

    const produto = await Produto.create({
        nome: request.body.nome,
        descricao: request.body.descricao,
        preco: request.body.preco,
    })

    response.json(produto);
})

app.get('/produtos', async (request, response) => {
    const produtos = await Produto.findAll();
    response.json(produtos);
})


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
