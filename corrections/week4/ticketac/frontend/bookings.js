// Get bookings
fetch('http://localhost:3000/bookings')
	.then(response => response.json())
	.then(data => {
		if (data.result) {
			document.querySelector('#trips').innerHTML = '';

			data.bookings.forEach(({ trip }) => {
				document.querySelector('#trips').innerHTML += `
					<div>
						${trip.departure} -> ${trip.arrival} - ${moment(trip.date).format('HH:mm')} - ${trip.price}€
						- Departure ${moment(trip.date).fromNow()}
					</div>
				`;
			});
		}
	});
