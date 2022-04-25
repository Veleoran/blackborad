require('./models/connection');
const Article = require('./models/articles');
const User = require('./models/users');
const Order = require('./models/orders');


/*
** Articles
*/

function displayAllArticles() {
	Article.find().then(data => {
		console.log('ARTICLES =>', data);
	});
}
// Sample call:
// displayAllArticles();

function displayArticleByName(articleName) {
	Article.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}
// Sample call:
// displayArticleByName('Weebot');

function displayArticleByID(articleId) {
	Article.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}
// Sample call:
// displayArticleByID('625ea9ca38d6a3776994651f');

function updateArticlePrice(articleId, newPrice) {
	Article.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}
// Sample call:
// updateArticlePrice('625ea9ca38d6a3776994651e', 149);

function updateArticleStock(articleId, newStock) {
	Article.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}
// Sample call:
// updateArticleStock('625ea9ca38d6a3776994651e', 14);

function resetStocks() {
	Article.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}
// Sample call:
// resetStocks();


/*
** Users
*/

function displayAllUsers() {
	User.find().then(data => {
		console.log('USERS =>', data);
	});
}
// Sample call:
// displayAllUsers();

function deleteUser(userId) {
	User.deleteOne({ _id: userId }).then(() => {
		console.log(`User ${userId} deleted`);
	});
}
// Sample call:
// deleteUser('625ea9ca38d6a3776994651j');


/*
** Orders
*/

function displayAllOrders() {
	Order.find().then(data => {
		console.log('ORDERS =>', data);
	});
}
// Sample call:
// displayAllOrders();

function updateOrderPaymentStatus(orderId, isPaid) {
	Order.updateOne({ _id: orderId }, { paid: isPaid }).then(() => {
		console.log(`Order ${orderId} updated`);
	});
}
// Sample call:
// updateOrderPaymentStatus('625ea9ca38d6a37769946513', true);

function deleteOrder(orderId) {
	Order.deleteOne({ _id: orderId }).then(() => {
		console.log(`Order ${orderId} deleted`);
	});
}
// Sample call:
// deleteOrder('625ea9ca38d6a37769946515');


// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
	displayAllUsers,
	deleteUser,
	displayAllOrders,
	updateOrderPaymentStatus,
	deleteOrder,
};
