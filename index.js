const express = require ('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

require('./database/index');

const Produto = require('./models/Produto');

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
})

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

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
