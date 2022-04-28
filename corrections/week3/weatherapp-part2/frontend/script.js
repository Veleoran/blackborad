

function updateDeleteCityEventListener() {
	for (let i = 0; i < document.querySelectorAll('.deleteCityBtn').length; i++) {
		document.querySelectorAll('.deleteCityBtn')[i].addEventListener('click', function () {
			fetch(`http://localhost:3000/weather/${this.id}`, { method: 'DELETE' })
				.then(response => response.json())
				.then(data => {
					if (data.result) {
						this.parentNode.remove();
					}
				});
		});
	}
}

fetch('http://localhost:3000/weather')
	.then(response => response.json())
	.then(data => {
		if (data.weather) {
			for (let i = 0; i < data.weather.length; i++) {
				document.querySelector('#cityList').innerHTML += `
					<li class="cityElement">
					  <p class="weatherCityName">INITIAL : ${data.weather[i].cityName}</p>
						<p class="weatherDescription">${data.weather[i].description}</p>
						<p class="weatherTempMin">${data.weather[i].tempMin}°C</p>
						<p class="weatherTempMax">${data.weather[i].tempMax}°C</p/>
						<button class="deleteCityBtn" id="${data.weather[i].cityName}">X</button>
					</li>
				`;
			}
			updateDeleteCityEventListener();
		}
	});

document.querySelector('#addCityBtn').addEventListener('click', () => {
	const cityName = document.querySelector('#cityNameInput').value;

	fetch('http://localhost:3000/weather', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ cityName }),
	})
		.then(response => response.json())
		.then(data => {
			if (data.result) {
				document.querySelector('#cityList').innerHTML += `
					<li class="cityElement">
						<p class="weatherCityName">${data.weather.cityName}</p>
						<p class="weatherDescription">${data.weather.description}</p>
						<p class="weatherTempMin">${data.weather.tempMin}°C</p>
						<p class="weatherTempMax">${data.weather.tempMax}°C</p/>
						<button class="deleteCityBtn" id="${data.weather.cityName}">X</button>
					</li>
				`;
				updateDeleteCityEventListener();
			}
		});
});
