const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

// INFO Register middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));

// INFO Register simple route
app.use('/status', (req, res, next) => {
  res.send('Ok');
});
app.use('/api', routes);

app.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500;
  res.status(error.statusCode).json({ error: error.message });
});

// INFO Start application
if (process.env.NODE_ENV !== 'test')
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

module.exports = app;
