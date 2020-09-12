const express = require('express');
const router = express.Router();
const addUserController = require('../controllers/add-users.controller');
const getUserController = require('../controllers/get-users.controller');

router.get('/', getUserController.getUsers);

router.post('/', addUserController.addUsers);

module.exports = router;