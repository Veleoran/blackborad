fetch(`${BACKEND_URL}/year`)
  .then(response => response.json())
  .then(data => {
    const yearElement = document.getElementById('year');
    yearElement.textContent = data.year;
  })
  .catch(error => console.error(error));
