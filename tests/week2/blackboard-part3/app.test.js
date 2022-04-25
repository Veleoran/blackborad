const mongoose = require('mongoose');
const Article = require('./models/articles');
const Order = require('./models/orders');
const User = require('./models/users');
const {
	displayOrderArticles,
	displayUserOrders,
} = require('./app');

beforeAll(() => {
	// TODO Antoine: Mock real return values
	jest.spyOn(Order, 'findById').mockReturnValue({ populate: jest.fn((field) => Promise.resolve({ field })), then: jest.fn() });
	jest.spyOn(Order, 'find').mockResolvedValue({});
});

const userId = '625efd3ce35bb06b64abe924';
const orderId = '625efd3ce35bb06b64abe925';
const userAddresses = [
	{ street: 'STREET', city: 'CITY', zipCode: 'ZIPCODE', isFavourite: true },
	{ street: 'STREET 2', city: 'CITY 2', zipCode: 'ZIPCODE 2', isFavourite: false },			
];

it('Checks user schema & model', () => {
	expect(User).toBeDefined();

	const inscriptionDate = new Date();
	const newUser = new User({
		firstName: 'FIRSTNAME',
		lastName: 'LASTNAME',
		email: 'firstname.lastname@gmail.com',
		inscriptionDate,
		addresses: userAddresses,
	});

	expect(newUser).toHaveProperty('_id');
	expect(newUser).toHaveProperty('firstName', 'FIRSTNAME');
	expect(newUser).toHaveProperty('lastName', 'LASTNAME');
	expect(newUser).toHaveProperty('email', 'firstname.lastname@gmail.com');
	expect(newUser).toHaveProperty('inscriptionDate', inscriptionDate);
	expect(newUser).toHaveProperty('addresses');
	expect(newUser.addresses).toEqual(expect.arrayContaining(
		[expect.objectContaining(userAddresses[0])],
		[expect.objectContaining(userAddresses[1])],
	));;
});

it('Checks orders schema & model', () => {
	expect(Order).toBeDefined();

	const inscriptionDate = new Date();
	const newUser = new User({
		firstName: 'FIRSTNAME',
		lastName: 'LASTNAME',
		email: 'firstname.lastname@gmail.com',
		inscriptionDate,
		addresses: userAddresses,
	});

	const purchaseDate = new Date();
	const newOrder = new Order({
		total: 50,
		shippingFees: 5,
		paid: true,
		purchaseDate,
		user: newUser._id,
	});

	expect(newOrder).toHaveProperty('_id');
	expect(newOrder).toHaveProperty('total', 50);
	expect(newOrder).toHaveProperty('shippingFees', 5);
	expect(newOrder).toHaveProperty('paid', true);
	expect(newOrder).toHaveProperty('purchaseDate', purchaseDate);
	expect(newOrder).toHaveProperty('user', newUser._id);
});

it('Finds articles by order id (with populate)', () => {
	displayOrderArticles(orderId);

	const lastInstanceIndex = Order.findById.mock.results.length - 1;
	expect(Order.findById).toHaveBeenCalled();
	expect(Order.findById.mock.lastCall[0]).toBe(orderId);
	expect(Order.findById.mock.results[lastInstanceIndex].value.populate).toHaveBeenCalled();
	expect(Order.findById.mock.results[lastInstanceIndex].value.populate.mock.lastCall[0]).toBe('articles');
});

it('Finds orders by user id', () => {
	displayUserOrders(userId);

	expect(Order.find).toHaveBeenCalled();
	expect(Order.find.mock.lastCall[0]).toHaveProperty('user', userId);
});

afterAll(() => {
	mongoose.connection.close();
});
