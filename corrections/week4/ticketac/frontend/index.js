// Set date default value to today
document.querySelector('#date').valueAsDate = new Date();

function updateTripBookingEventListener() {
	for (let i = 0; i < document.querySelectorAll('.book').length; i++) {
		document.querySelectorAll('.book')[i].addEventListener('click', function () {
			fetch('http://localhost:3000/cart', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ tripId: this.id }),
			})
				.then(response => response.json())
				.then(data => {
					data.result && window.location.assign('cart.html');
				});
		});
	}
}

// Search
document.querySelector('#search').addEventListener('click', function () {
	const departure = document.querySelector('#departure').value;
	const arrival = document.querySelector('#arrival').value;
	const date = document.querySelector('#date').value;

	if (!departure || !arrival || !date) {
		return;
	}

	fetch(`http://localhost:3000/search/${departure}/${arrival}/${date}`)
		.then(response => response.json())
		.then(data => {
			if (data.result) {
				document.querySelector('#results').innerHTML = '';

				// Update results
				data.trips.forEach(trip => {
					document.querySelector('#results').innerHTML += `
					  <div>
						  ${trip.departure} -> ${trip.arrival} - ${moment(trip.date).format('HH:mm')} - ${trip.price}€
							<button class="book" id="${trip._id}">Book</button>
						</div>
					`;
				});

				updateTripBookingEventListener();
			} else {
				document.querySelector('#results').innerHTML = 'No trip found :(';
			}
		});
});