const express = require('express');
const controllers = require('../controllers');
const router = express.Router();

router.post('/users', controllers.createUser);
router.get('/users', controllers.getAllUsers);
router.get('/users/:id', controllers.getUserById);
router.put('/users/:id', controllers.updateUser);
router.delete('/users', controllers.deleteUser);

module.exports = router;
