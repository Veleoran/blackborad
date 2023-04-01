const Article = require('./models/articles');
const User = require('./models/users');
const Order = require('./models/orders');


function displayAllArticles() {
	Article.find().then(data => {
		console.log('ARTICLES =>', data);
	});
}

function displayArticleByName(articleName) {
	Article.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function displayArticleByID(articleId) {
	Article.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function updateArticlePrice(articleId, newPrice) {
	Article.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}

function updateArticleStock(articleId, newStock) {
	Article.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}

function resetStocks() {
	Article.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}


/*
** Users
*/

function displayAllUsers() { 
	User.find().then(data => {
		console.log(data);
	   });
}
//c est ok au dessus

function deleteUser(userId) {
	User.deleteOne({ _id: '6426e1660a5435fff043f99e' })
	  .then(() => {
		User.find().then((data) => {
		  console.log(data);
		});
	  })
	  .catch((error) => {
		console.error('Erreur lors de la suppression de l\'utilisateur:', error);
	  });
  }
  
  // Pour utiliser la fonction deleteUser avec un ID spécifique :
//   const userId = '6426e1660a5435fff043f99e';
//   deleteUser(userId);
  
/*
** Orders
*/
function displayAllOrders() {
	Order.find().then((data) => {
	  console.log('Orders =>', data);
	});
  }
  
  function updateOrderPaymentStatus(orderId, isPaid) {
	// Ajoutez ici la logique pour mettre à jour le statut de paiement de la commande
  }
  function deleteOrder(orderId) {
	Order.deleteOne({ _id: orderId })
	  .then(() => {
		console.log('Order deleted successfully');
	  })
	  .catch((error) => {
		console.error('Erreur lors de la suppression de la commande:', error);
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
	displayAllUsers,
	deleteUser,
	displayAllOrders,
	updateOrderPaymentStatus,
	deleteOrder,
};
