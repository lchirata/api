const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORTA = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send('Olá Mundo')
});




app.listen(PORTA, () => console.log('Rodando'))
