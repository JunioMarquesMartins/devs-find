const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://<user>:<senha>@cluster0-jghfd.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);



// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenaçao, paginaçao, ...);
// Route Params: reuqest.params (Identificar um recurso na añteraçao ou remoçao);
// Body request.body (Dados para criaçao ou alteraçao de um registro);

// MongoDB (Nao-relacional)



