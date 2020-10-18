const express = require('express');
const router = express.Router();
const addProductController = require('../controllers/add-products.controller');

router.post('/', addProductController.addProducts);

module.exports = router;