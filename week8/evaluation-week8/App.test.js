import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import App from './App';

it('Try to calculate', async () => {
	render(<App />);

	const display = screen.getByTestId('display');

	const oneButton = await screen.findByText('1');
	const twoButton = await screen.findByText('2');
	const threeButton = await screen.findByText('3');
	const fourButton = await screen.findByText('4');
	const fiveButton = await screen.findByText('5');
	const sixButton = await screen.findByText('6');
	const sevenButton = await screen.findByText('7');
	const eightButton = await screen.findByText('8');
	const nineButton = await screen.findByText('9');
	const zeroButton = await screen.findByText('0');

	const plusButton = await screen.findByText(' + ');
	const minusButton = await screen.findByText(' - ');
	const timesButton = await screen.findByText(' x ');
	const dividedByButton = await screen.findByText(' / ');

	const backButton = await screen.findByText('←');
	const clearButton = await screen.findByText('Clear');
	const equalButton = await screen.findByText('=');

	fireEvent.press(twoButton);
	fireEvent.press(plusButton);
	fireEvent.press(twoButton);
	fireEvent.press(equalButton);

	const firstResult = display._fiber.pendingProps.children[0];

	fireEvent.press(timesButton);
	fireEvent.press(fiveButton);
	fireEvent.press(eightButton);
	fireEvent.press(equalButton);

	const secondResult = display._fiber.pendingProps.children[0];

	expect(firstResult).toBe('4');
	expect(secondResult).toBe('232');
});
