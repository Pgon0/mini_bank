const express = require('express');
const { createUser, getAllUsers, getUserById, updater, deleteUser } = require('../controllers/usersController');

const router = express.Router();

// Rota para criar um novo usuário
router.post('/', createUser);

// router.get('/', getAllUsers);
router.get('/', getAllUsers); 

// router.get('/:id', getUserById);
router.get('/:id', getUserById);

// router.put('/:id', updateUser);
router.put('/:id', updater);

// router.delete('/:id', deleteUser);
router.delete('/:id', deleteUser);

module.exports = router;
