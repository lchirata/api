const express = require ('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/',(request, response) =>{
    response.status(200).send('Ola mundo')
});

app.post('/produtos',(request, response)=>{
    response.json(request.body);
    // console.log(request.body);
    // response.send('PRODUTOS')
});


// app.listen(3000)
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))