const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Rota para listar todos os usuários (GET)
router.get('/', userController.getUsers);

// Rota para criar um novo usuário (POST)
router.post('/', userController.createUser);

module.exports = router;
