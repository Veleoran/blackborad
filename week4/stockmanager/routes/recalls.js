const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');



router.get('/byId/:id', productsController.getById);
router.get('/byBrand/:brand', productsController.getByBrand);
router.get('/byBatchId/:id', productsController.getByBatchId);

module.exports = router;
