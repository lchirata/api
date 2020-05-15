const express = require ('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

require('./database/index');

const Produto = require('./models/Produto');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(request, response) =>{
    response.status(200).send('Ola mundo')
});

app.post('/produtos', async (request, response) =>{
    const produto = await Produto.create({
        nome: request.body.nome,
        descricao: request.body.descricao,
        preco: request.body.preco
    });
    response.json(produto);
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))