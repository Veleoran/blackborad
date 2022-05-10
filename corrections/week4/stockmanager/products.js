const data = require('./data');

function getProductById(productId) {
	return data.find(product => product.id === productId);
}

function getProductsByBrand(brand) {
	return data.filter(product => product.brand === brand);
}

function getProductByBatchId(batchId) {
	return data.find(product => product.batches.find(batch => batch.id === batchId));
}

module.exports = { getProductById, getProductsByBrand, getProductByBatchId };

// products.js
// Récupérer un produit par son ID : getProductById
// Récupérer tous les produits d'une marque : getProductsByBrand
// Récupérer le produit lié à un lot : getProductByBatchId
