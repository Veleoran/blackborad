function checkBody(body, keys) {
	let isValid = true;

	keys.forEach(field => {
		if (!body[field] || body[field] === '') {
			isValid = false;
		}
	});

	return isValid;
}

module.exports = { checkBody };
