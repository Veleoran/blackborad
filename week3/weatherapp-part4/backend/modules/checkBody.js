function checkBody(body, fields) {
	let isValid = true;

	fields.forEach(field => {
		if (!body[field] || body[field] === '') {
			isValid = false;
		}
	});

	return isValid;
}

module.exports = { checkBody };
