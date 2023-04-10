const express = require('express');
const router = express.Router();




const { getProductById, getProductsByBrand, getProductByBatchId } = require('../services/productsService');

exports.getById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = await getProductById(id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

exports.getByBrand = async (req, res) => {
  const brand = req.params.brand;
  const products = await getProductsByBrand(brand);

  res.status(200).json(products);
};

exports.getByBatchId = async (req, res) => {
  const batchId = parseInt(req.params.id, 10);
  const product = await getProductByBatchId(batchId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};


// // Remplacez par votre propre implémentation de contrôleur
// router.get('/byId/:id', (req, res) => {
//   // Implémentation du contrôleur
// });

// router.get('/byBrand/:brand', (req, res) => {
//   // Implémentation du contrôleur
// });

// router.get('/byBatchId/:id', (req, res) => {
//   // Implémentation du contrôleur
// });

module.exports = router;
