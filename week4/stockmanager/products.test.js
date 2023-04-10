const axios = require('axios');

// Remplacez par l'URL de votre API si nécessaire
const baseURL = 'http://localhost:3000';

describe('Products', () => {
  test('Test 1: Get product by ID', async () => {
    const productId = 2044; 
    const response = await axios.get(`${baseURL}/products/byId/${productId}`);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(productId);
  });

  test('Test 2: Get products by brand', async () => {
    const brand = 'Lipton';
    const response = await axios.get(`${baseURL}/products/byBrand/${brand}`);

    expect(response.status).toBe(200);
    response.data.forEach(product => {
      expect(product.brand).toBe(brand);
    });
  });

  test('Test 3: Get product by batch ID', async () => {
    const batchId = 2044800103; 
    const response = await axios.get(`${baseURL}/products/byBatchId/${batchId}`);

    expect(response.status).toBe(200);
    expect(response.data.batchId).toBe(batchId);
  });
});
