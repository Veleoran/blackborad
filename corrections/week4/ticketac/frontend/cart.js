function updateRemoveFromCartEventListener() {
	for (let i = 0; i < document.querySelectorAll('.delete').length; i++) {
		document.querySelectorAll('.delete')[i].addEventListener('click', function () {
			fetch(`http://localhost:3000/cart/${this.id}`, { method: 'DELETE' })
				.then(response => response.json())
				.then(data => {
					if (data.result) {
						this.parentNode.remove();

						// Reset cart if all trips have been deleted
						if (document.querySelectorAll('.delete').length === 0) {
							document.querySelector('#cart').innerHTML = `
								<p>No tickets in your cart.</p>
								<p>Why not plan a trip?</p>
							`;
							document.querySelector('#payment').style.display = 'none';
						}
					}
				});
		});
	}
}

// Get cart
fetch('http://localhost:3000/cart')
	.then(response => response.json())
	.then(data => {
		if (data.result) {
			document.querySelector('#payment').style.display = 'block';
			document.querySelector('#cart').innerHTML = '';

			// Update cart list
			data.bookings.forEach(({ trip }) => {
				document.querySelector('#cart').innerHTML += `
					<div>
						${trip.departure} -> ${trip.arrival} - ${moment(trip.date).format('HH:mm')} - ${trip.price}€
						<button class="delete" id="${trip._id}">X</button>
					</div>
				`;
			});

			// Update total
			document.querySelector('#total').textContent = data.bookings.reduce((acc, { trip }) =>  acc + trip.price, 0);

			updateRemoveFromCartEventListener();
		} else {
			document.querySelector('#payment').style.display = 'none';
		}
	});

// Purchase
document.querySelector('#purchase').addEventListener('click', function () {
	fetch('http://localhost:3000/bookings', { method: 'PUT' })
		.then(response => response.json())
		.then(data => {
			data.result && window.location.assign('bookings.html');
		});
});
