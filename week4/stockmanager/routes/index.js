var express = require('express');
var productsRoutes = require("./routes/products");
var recallsRoutes = require("./routes/recalls");
const app = express()
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/recalls", recallsRoutes);
const app = require("./app")
var router = express.Router();

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server running on port ${PORT}' ));


module.exports = router;
const express = require('express');
const router = express.Router();

const {
  getProductById,
  getProductsByBrand,
  getProductByBatchId,
} = require('../services/productsService');

const {
  getRecalledProductsByBrand,
  getRecalledProductsByTimestamp,
} = require('../services/recallsService');

router.get('/byId/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = await getProductById(id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.get('/byBrand/:brand', async (req, res) => {
  const brand = req.params.brand;
  const products = await getProductsByBrand(brand);

  res.status(200).json(products);
});

router.get('/byBatchId/:id', async (req, res) => {
  const batchId = parseInt(req.params.id, 10);
  const product = await getProductByBatchId(batchId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.get('/byBrand/:brand', async (req, res) => {
  const brand = req.params.brand;
  const recalledProducts = await getRecalledProductsByBrand(brand);

  res.status(200).json(recalledProducts);
});

router.get('/byTimestamp/:timestamp', async (req, res) => {
  const timestamp = Date.parse(req.params.timestamp);
  const recalledProducts = await getRecalledProductsByTimestamp(timestamp);

  res.status(200).json(recalledProducts);
});

module.exports = router;
