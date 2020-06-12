const express = require ('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

require('./database/index');


const moment = require('moment');
const clienteRouter = require('./src/Clientes');
const produtoRouter = require('./src/Produtos');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/clientes', clienteRouter);
app.use('/produtos', produtoRouter);
app.use('/clientes', clienteRouter);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
