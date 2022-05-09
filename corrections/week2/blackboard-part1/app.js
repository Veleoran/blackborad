const db = require('./database/setup'); // Do not edit/remove this line


function displayAllArticles() {
	db.find().then(data => {
		console.log('ARTICLES =>', data);
	});
}
// Sample call:
// displayAllArticles();


function displayArticleByName(articleName) {
	db.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}
// Sample call:
// displayArticleByName('Weebot');


function displayArticleByID(articleId) {
	db.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}
// Sample call:
// displayArticleByID('625ea9ca38d6a3776994651f');


function updateArticlePrice(articleId, newPrice) {
	db.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}
// Sample call:
// updateArticlePrice('625ea9ca38d6a3776994651e', 149);


function updateArticleStock(articleId, newStock) {
	db.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}
// Sample call:
// updateArticleStock('625ea9ca38d6a3776994651e', 14);


function resetStocks() {
	db.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}
// Sample call:
// resetStocks();


// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
};