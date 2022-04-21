const mongoose = require('mongoose');
const db = require('./database/setup');
const {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
} = require('./app');

beforeAll(() => {
	jest.spyOn(db, 'find').mockReturnValue(Promise.resolve());
	jest.spyOn(db, 'findOne').mockReturnValue(Promise.resolve());
	jest.spyOn(db, 'findById').mockReturnValue(Promise.resolve());
	jest.spyOn(db, 'updateOne').mockReturnValue(Promise.resolve());
	jest.spyOn(db, 'updateMany').mockReturnValue(Promise.resolve());
});

const articleName = 'Awesome article';
const articleId = '625efd3ce35bb06b64abe923';

it('Finds all articles', () => {
	displayAllArticles();

	expect(db.find).toHaveBeenCalled();
	expect(db.find.mock.lastCall).toEqual([]);
});

it('Finds article by name', () => {
	displayArticleByName(articleName);

	expect(db.findOne).toHaveBeenCalled();
	expect(db.findOne.mock.lastCall[0]).toHaveProperty('name', articleName);
});

it('Finds article by ID', () => {
	displayArticleByID(articleName);

	expect(db.findById).toHaveBeenCalled();
	expect(db.findById.mock.lastCall[0]).toBe(articleName);
});

it('Updates article price by ID', () => {
	updateArticlePrice(articleId, 500);

	expect(db.updateOne).toHaveBeenCalled();
	expect(db.updateOne.mock.lastCall[0]).toHaveProperty('_id', articleId);
	expect(db.updateOne.mock.lastCall[1]).toHaveProperty('price', 500);
});

it('Updates article stock by ID', () => {
	updateArticleStock(articleId, 50);

	expect(db.updateOne).toHaveBeenCalled();
	expect(db.updateOne.mock.lastCall[0]).toHaveProperty('_id', articleId);
	expect(db.updateOne.mock.lastCall[1]).toHaveProperty('stock', 50);
});

it('Updates all articles stock to 0', () => {
	resetStocks();

	expect(db.updateMany).toHaveBeenCalled();
	expect(db.updateMany.mock.lastCall[0]).toEqual({});
	expect(db.updateMany.mock.lastCall[1]).toHaveProperty('stock', 0);
});

afterAll(() => {
	mongoose.connection.close();
});
