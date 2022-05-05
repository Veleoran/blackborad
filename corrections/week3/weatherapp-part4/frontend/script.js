

function updateDeleteCityEventListener() {
	for (let i = 0; i < document.querySelectorAll('.deleteCity').length; i++) {
		document.querySelectorAll('.deleteCity')[i].addEventListener('click', function () {
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
			// City list
			for (let i = 0; i < data.weather.length; i++) {
				document.querySelector('#cityList').innerHTML += `
					<li class="city">
					  <p class="name">${data.weather[i].cityName}</p>
						<p class="description">${data.weather[i].description}</p>
						<p class="tempMin">${data.weather[i].tempMin}°C</p>
						<p class="tempMax">${data.weather[i].tempMax}°C</p/>
						<button class="deleteCity" id="${data.weather[i].cityName}">X</button>
					</li>
				`;
			}
			updateDeleteCityEventListener();

			// Current position
			document.querySelector('#currentPos').innerHTML = `
				<p id="currentPosName">${data.currentPosWeather.cityName}</p>
				<p id="currentPosDescription">${data.currentPosWeather.description}</p>
				<p id="currentPosTempMin">${data.currentPosWeather.tempMin}°C</p>
				<p id="currentPosTempMax">${data.currentPosWeather.tempMax}°C</p>
			`;
		}
	});

document.querySelector('#addCity').addEventListener('click', function () {
	const cityName = document.querySelector('#cityNameInput').value;

	fetch('http://localhost:3000/weather', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ cityName }),
	}).then(response => response.json())
		.then(data => {
			if (data.result) {
				document.querySelector('#cityList').innerHTML += `
					<li class="city">
						<p class="name">${data.weather.cityName}</p>
						<p class="description">${data.weather.description}</p>
						<p class="tempMin">${data.weather.tempMin}°C</p>
						<p class="tempMax">${data.weather.tempMax}°C</p/>
						<button class="deleteCity" id="${data.weather.cityName}">X</button>
					</li>
				`;
				updateDeleteCityEventListener();
				document.querySelector('#cityNameInput').value = '';
			}
		});
});
