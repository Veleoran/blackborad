const mongoose = require('mongoose');
const Article = require('./models/articles');
const Order = require('./models/orders');
const User = require('./models/users');
const {
	displayAllUsers,
	deleteUser,
	displayAllOrders,
	updateOrderPaymentStatus,
	deleteOrder,
} = require('./app');

beforeAll(() => {
	// TODO Antoine: Mock real return values
	jest.spyOn(User, 'find').mockResolvedValue([]);
	jest.spyOn(User, 'deleteOne').mockResolvedValue({});
	jest.spyOn(Order, 'find').mockResolvedValue([]);
	jest.spyOn(Order, 'updateOne').mockResolvedValue({});
	jest.spyOn(Order, 'deleteOne').mockResolvedValue({});
});

const userId = '625efd3ce35bb06b64abe924';
const orderId = '625efd3ce35bb06b64abe925';

it('Checks articles schema & model', () => {
	expect(Article).toBeDefined();

	const newArticle = new Article({
		name: 'NAME',
		description: 'DESCRIPTION',
		price: 500,
		stock: 5,
		weight: 150,
		image: 'IMAGE',
	});

	expect(newArticle).toHaveProperty('_id');
	expect(newArticle).toHaveProperty('name', 'NAME');
	expect(newArticle).toHaveProperty('description', 'DESCRIPTION');
	expect(newArticle).toHaveProperty('price', 500);
	expect(newArticle).toHaveProperty('stock', 5);
	expect(newArticle).toHaveProperty('weight', 150);
	expect(newArticle).toHaveProperty('image', 'IMAGE');
});

it('Checks orders schema & model', () => {
	expect(Order).toBeDefined();

	const date = new Date();
	const newOrder = new Order({
		total: 50,
		shippingFees: 5,
		paid: true,
		purchaseDate: date,
	});

	expect(newOrder).toHaveProperty('_id');
	expect(newOrder).toHaveProperty('total', 50);
	expect(newOrder).toHaveProperty('shippingFees', 5);
	expect(newOrder).toHaveProperty('paid', true);
	expect(newOrder).toHaveProperty('purchaseDate', date);
});

it('Checks user schema & model', () => {
	expect(User).toBeDefined();

	const date = new Date();
	const newUser = new User({
		firstName: 'FIRSTNAME',
		lastName: 'LASTNAME',
		email: 'firstname.lastname@gmail.com',
		inscriptionDate: date,
	});

	expect(newUser).toHaveProperty('_id');
	expect(newUser).toHaveProperty('firstName', 'FIRSTNAME');
	expect(newUser).toHaveProperty('lastName', 'LASTNAME');
	expect(newUser).toHaveProperty('email', 'firstname.lastname@gmail.com');
	expect(newUser).toHaveProperty('inscriptionDate', date);
});

it('Checks database connection', async () => {
	require('./models/connection');
	const article = await Article.findOne();
	console.log(article);
});

it('Finds all users', () => {
	displayAllUsers();

	expect(User.find).toHaveBeenCalled();
	expect(User.find.mock.lastCall).toEqual([]);
});

it('Deletes user by ID', () => {
	deleteUser(userId);

	expect(User.deleteOne).toHaveBeenCalled();
	expect(User.deleteOne.mock.lastCall[0]).toHaveProperty('_id', userId);
});

it('Finds all orders', () => {
	displayAllOrders();

	expect(Order.find).toHaveBeenCalled();
	expect(Order.find.mock.lastCall).toEqual([]);
});

it('Updates order payment status by ID', () => {
	updateOrderPaymentStatus(orderId, true);

	expect(Order.updateOne).toHaveBeenCalled();
	expect(Order.updateOne.mock.lastCall[0]).toHaveProperty('_id', orderId);
	expect(Order.updateOne.mock.lastCall[1]).toHaveProperty('paid', true);
})

it('Deletes order by ID', () => {
	deleteOrder(orderId);

	expect(Order.deleteOne).toHaveBeenCalled();
	expect(Order.deleteOne.mock.lastCall[0]).toHaveProperty('_id', orderId);
});

afterAll(() => {
	mongoose.connection.close();
});
