document.querySelector('#message').addEventListener('input', function () {
	if (this.value === '') {
		document.querySelector('#sentiment').src = './images/question-mark.png';
		document.querySelector('#feeling').textContent = '';
		document.querySelector('#score').textContent = 0;
		document.querySelector('body').style.background = '#ffffff';
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
					document.querySelector('body').style.background = '#EC7C89';
					document.querySelector('#sentiment').src = './images/angry.png';
					document.querySelector('#feeling').textContent = 'ANGRY';
				} else if (data.score === 0) {
					document.querySelector('body').style.background = '#82C0CC';
					document.querySelector('#sentiment').src = './images/neutral.png';
					document.querySelector('#feeling').textContent = 'NEUTRAL';
				} else if (data.score > 0) {
					document.querySelector('body').style.background = '#F5DA7D';
					document.querySelector('#sentiment').src = './images/happy.png';
					document.querySelector('#feeling').textContent = 'HAPPY';
				}
			}
		});
});
