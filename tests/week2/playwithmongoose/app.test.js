const mongoose = require('mongoose');
const { createTodo, completeTodo, deleteTodo } = require('./app');
const db = require('./database/setup');

const todoName = 'Awesome task';
const todoPriority = 3;

beforeAll(() => {
	// TODO Antoine: Mock real return values
	jest.spyOn(db.prototype, 'save').mockResolvedValue({});
	jest.spyOn(db, 'find').mockResolvedValue([]);
	jest.spyOn(db, 'findOne').mockResolvedValue({});
	jest.spyOn(db, 'updateOne').mockResolvedValue({});
	jest.spyOn(db, 'deleteOne').mockResolvedValue({});
});

it('Creates todo', () => {
	createTodo(todoName, todoPriority);

	const _db = new db();
	const lastInstanceIndex = _db.save.mock.instances.length - 1;
	expect(_db.save).toHaveBeenCalled();
	expect(_db.save.mock.instances[lastInstanceIndex]).toHaveProperty('name', todoName);
	expect(_db.save.mock.instances[lastInstanceIndex]).toHaveProperty('priority', todoPriority);
	expect(_db.save.mock.instances[lastInstanceIndex]).toHaveProperty('done', false);
});

it('Completes todo', () => {
	completeTodo(todoName);

	expect(db.updateOne).toHaveBeenCalled();
	expect(db.updateOne.mock.lastCall[0]).toHaveProperty('name', todoName);
	expect(db.updateOne.mock.lastCall[1]).toHaveProperty('done', true);
});

it('Deletes todo', async () => {
	deleteTodo(todoName);

	expect(db.deleteOne).toHaveBeenCalled();
	expect(db.deleteOne.mock.lastCall[0]).toHaveProperty('name', todoName);
});

afterAll(() => {
	mongoose.connection.close();
});
