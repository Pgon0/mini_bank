const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const config = require('./config');

dotenv.config(); // Carrega variáveis de ambiente

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(helmet()); // Segurança básica
app.use(morgan('dev')); // Log de requisições

// Rotas
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Rota base
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// Inicialização do servidor
app.listen(config.port, () => {
  console.log(`✅ Server running on port ${config.port}`);
});
