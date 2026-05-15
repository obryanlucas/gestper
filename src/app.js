const express = require('express');
const cors = require('cors');
require('dotenv').config();

const alunosRoutes = require('./routes/alunos.routes');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/alunos', alunosRoutes);

app.use(errorMiddleware);

module.exports = app;
