const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
const todoName = `Random test by La Capsule #${randomNumber}`;
const todoPriority = 3;

it('Creates todo', async () => {
	createTodo(todoName, 3);
	await new Promise(resolve => setTimeout(resolve, 1500));
	const todo = await db.findOne({ name: todoName });

	expect(todo).not.toBe(null);
	expect(todo.name).toBe(todoName);
	expect(todo.priority).toBe(todoPriority);
	expect(todo.done).toBe(false);
});

it('Completes todo', async () => {
	completeTodo(todoName);
	await new Promise(resolve => setTimeout(resolve, 1500));
	const todo = await db.findOne({ name: todoName });

	expect(todo.done).toBe(true);
});

it('Deletes todo', async () => {
	deleteTodo(todoName);
	await new Promise(resolve => setTimeout(resolve, 1500));
	const todo = await db.findOne({ name: todoName });

	expect(todo).toBe(null);
});

afterAll(async () => {
	const mongoose = require('mongoose');
	await mongoose.connection.close();
});