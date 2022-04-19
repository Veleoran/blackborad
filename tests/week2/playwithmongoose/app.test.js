const { createTodo, completeTodo, deleteTodo } = require('./app');
const db = require('./database/setup');

const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
const todoName = `Random test by La Capsule #${randomNumber}`;
const todoPriority = 3;

const spySave = jest.spyOn(db.prototype, 'save').mockReturnValue(Promise.resolve());
const spyFind = jest.spyOn(db, 'find').mockReturnValue(Promise.resolve());
const spyFindOne = jest.spyOn(db, 'findOne').mockReturnValue(Promise.resolve());
const spyUpdate = jest.spyOn(db, 'update').mockReturnValue(Promise.resolve());
const spyUpdateOne = jest.spyOn(db, 'updateOne').mockReturnValue(Promise.resolve());
const spyDeleteOne = jest.spyOn(db, 'deleteOne').mockReturnValue(Promise.resolve());

it('Creates todo', () => {
	createTodo(todoName, todoPriority);

	// TODO: Vérifier constructeur new db(...)

	expect(spySave).toHaveBeenCalledTimes(1);
	expect(spySave.mock.instances[0]).toHaveProperty('name', todoName);
	expect(spySave.mock.instances[0]).toHaveProperty('priority', todoPriority);
	expect(spySave.mock.instances[0]).toHaveProperty('done', false);
});

it('Completes todo', () => {
	completeTodo(todoName);

	expect(spyUpdateOne).toHaveBeenCalledTimes(1);
	expect(spyUpdateOne.mock.lastCall[0]).toHaveProperty('name', todoName);
	expect(spyUpdateOne.mock.lastCall[1]).toHaveProperty('done', true);
});

it('Deletes todo', async () => {	
	deleteTodo(todoName);

	expect(spyDeleteOne).toHaveBeenCalledTimes(1);
	expect(spyDeleteOne.mock.lastCall[0]).toHaveProperty('name', todoName);
});

afterAll(() => {
	const mongoose = require('mongoose');
	mongoose.connection.close();
});
