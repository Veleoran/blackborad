import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from './components/Home';

jest.mock('./components/Movie', () => {
	return {
		__esModule: true,
		default: () => <div data-testid="movie"></div>
	};
});

it('MyMoviz logo', () => {
	const { getByAltText } = render(<Home />);
	const logo = getByAltText(/Logo/i);
	expect(logo).toBeInTheDocument();
	expect(logo.src).toContain('logo.png');
});

it('Wishlist button', () => {
	const { getByText } = render(<Home />);
	const button = getByText(/4 movies/i);
	expect(button).toBeInTheDocument();
});

it('Home component renders 5x <Movie />', () => {
	const { getAllByTestId } = render(<Home />);
	const movieComponents = getAllByTestId('movie');
	expect(movieComponents.length).toBe(10);
});
