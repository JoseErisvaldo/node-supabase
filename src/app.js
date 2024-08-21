const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const errorHandler = require('./middlewares/errorHandler'); // Middleware para tratamento de erros

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

// Usar rotas
app.use('/users', usersRouter);

// Usar middleware de tratamento de erros
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
