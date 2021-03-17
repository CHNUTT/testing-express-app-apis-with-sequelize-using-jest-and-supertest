const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

// INFO Register middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// INFO Register simple route
app.use('/api', routes);

// INFO Start application
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
