const axios = require('axios');

// Remplacez par l'URL de votre API si nécessaire
const baseURL = 'http://localhost:3000';

describe('Recalls', () => {
  test('Test 1: Get product IDs recalled by brand', async () => {
    const brand = 'Brand Name'; // Remplacez par un nom de marque valide
    const response = await axios.get(`${baseURL}/recalls/byBrand/${brand}`);

    expect(response.status).toBe(200);
    response.data.forEach(product => {
      expect(product.brand).toBe(brand);
      expect(product.recall).toBe(true);
    });
  });

  test('Test 2: Get product IDs recalled by timestamp', async () => {
    const timestamp = 1672444800; // Remplacez par un timestamp valide
    const response = await axios.get(`${baseURL}/recalls/byTimestamp/${timestamp}`);

    expect(response.status).toBe(200);
    response.data.forEach(product => {
      expect(product.expirationDate).toBe(timestamp);
      expect(product.recall).toBe(true);
    });
  });
});
