const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.status(200).send('Olá Mundo')
});

app.post('/produtos', (request, response) => {
    response.json(request.body)
})


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
