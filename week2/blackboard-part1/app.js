const db = require('./database/setup'); // Do not edit/remove this line

function getAllArticles() {
	return db.find().then(data => {
		console.log(data);
		return data;
	});
}