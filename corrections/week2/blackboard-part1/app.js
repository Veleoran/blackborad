const db = require('./database/setup'); // Do not edit/remove this line


function displayAllArticles() {
	db.find().then(data => {
		console.log('ARTICLES =>', data);
	});
}


function displayArticleByName(articleName) {
	db.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}


function displayArticleByID(articleId) {
	db.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}


function updateArticlePrice(articleId, newPrice) {
	db.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}


function updateArticleStock(articleId, newStock) {
	db.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}


function resetStocks() {
	db.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}


// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
};