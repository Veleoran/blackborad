const products = require('../data');

exports.getRecalledProductsByBrand = async (brand) => {
  const recalledProducts = products.filter(
    (product) =>
      product.brand === brand &&
      product.batches.some((batch) => batch.recall)
  );
  const recalledProductIds = recalledProducts.map((product) => product.id);
  return { products: recalledProductIds };
};

exports.getRecalledProductsByTimestamp = async (timestamp) => {
  const recalledProducts = products.filter((product) =>
    product.batches.some(
      (batch) => batch.recall && Date.parse(batch.expirationDate) < timestamp
    )
  );
  const recalledProductIds = recalledProducts.map((product) => product.id);
  return { products: recalledProductIds };
};
