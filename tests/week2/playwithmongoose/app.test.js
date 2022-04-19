const { createTodo, completeTodo, deleteTodo } = require('./app');
const db = require('./database/setup');

const todoName = 'Awesome task';
const todoPriority = 3;

beforeAll(() => {
	jest.spyOn(db.prototype, 'save').mockReturnValue(Promise.resolve());
	jest.spyOn(db, 'find').mockReturnValue(Promise.resolve());
	jest.spyOn(db, 'findOne').mockReturnValue(Promise.resolve());
	jest.spyOn(db, 'update').mockReturnValue(Promise.resolve());
	jest.spyOn(db, 'updateOne').mockReturnValue(Promise.resolve());
	jest.spyOn(db, 'deleteOne').mockReturnValue(Promise.resolve());
});

it('Creates todo', () => {
	createTodo(todoName, todoPriority);

	const _db = new db();
	expect(_db.save).toHaveBeenCalledTimes(1);
	expect(_db.save.mock.instances[0]).toHaveProperty('name', todoName);
	expect(_db.save.mock.instances[0]).toHaveProperty('priority', todoPriority);
	expect(_db.save.mock.instances[0]).toHaveProperty('done', false);
});

it('Completes todo', () => {
	completeTodo(todoName);

	expect(db.updateOne).toHaveBeenCalledTimes(1);
	expect(db.updateOne.mock.lastCall[0]).toHaveProperty('name', todoName);
	expect(db.updateOne.mock.lastCall[1]).toHaveProperty('done', true);
});

it('Deletes todo', async () => {	
	deleteTodo(todoName);

	expect(db.deleteOne).toHaveBeenCalledTimes(1);
	expect(db.deleteOne.mock.lastCall[0]).toHaveProperty('name', todoName);
});

afterAll(() => {
	const mongoose = require('mongoose');
	mongoose.connection.close();
});
