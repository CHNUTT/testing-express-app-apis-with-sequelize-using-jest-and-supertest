const express = require('express');
// const controllers = require('../controllers');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('This is root!');
});

module.exports = router;
