const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
require('dotenv').config({ path: __dirname + '/../.env.test' });

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Something broke!' });
});

module.exports = app;
