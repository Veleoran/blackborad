document.querySelector('#message').addEventListener('input', function () {
	if (this.value === '') {
		document.querySelector('#sentiment').src = './images/neutral.png';
		document.querySelector('#score').textContent = 0;
		return;
	}

	fetch('http://localhost:3000/analyze', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ message: this.value }),
	}).then(response => response.json())
		.then(data => {
			if (data.result) {
				document.querySelector('#score').textContent = data.score;
				if (data.score < 0) {
					document.querySelector('#sentiment').src = './images/negative.png';
				} else if (data.score === 0) {
					document.querySelector('#sentiment').src = './images/neutral.png';
				} else if (data.score > 0) {
					document.querySelector('#sentiment').src = './images/positive.png';
				}
			}
		});
});
