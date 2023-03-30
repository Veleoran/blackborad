const db = require('./database/setup'); // Do not edit/remove this line


function displayAllArticles() {
	db.find().then(data => {
		console.log(data);
	   });
}
// displayAllArticles()


function displayArticleByName(articleName) {
	db.findOne({
		name: articleName })
		.then(data => {
			console.log(data);
		})
	}

// displayArticleByName("Weebot")	


function displayArticleByID(articleId) {
	db.findById(articleId)
		.then(data => {
			console.log(data);
		})
}
// displayArticleByID('625ea9ca38d6a37769946520')


function updateArticlePrice(articleId, newPrice) {
	db.updateOne( 
		{ _id: articleId },
		{price: newPrice }
	).then(() => {
		db.find().then(data =>
    {
		console.log(data);
	});

 });
}

// updateArticlePrice('625ea9ca38d6a37769946520', 15900 )

function updateArticleStock(articleId, newStock) {
	db.updateOne( 
		{ _id: articleId },
		{stock: newStock }
	).then(() => {
		db.find().then(data =>
    {
		console.log(data);
	});

 });
}

// updateArticleStock('625ea9ca38d6a37769946520', 80)


function resetStocks() {
	db.updateMany(
		{},
		{stock: 0}
		).then(data => {
			console.log(data);

		});
};

// resetStocks()


// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
};