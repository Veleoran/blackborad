import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Movie from './components/Movie';

it('Poster image placeholder', () => {
	const { getByAltText } = render(<Movie />);
	const poster = getByAltText(/Poster/i);
	expect(poster).toBeInTheDocument();
	expect(poster.src).toContain('poster.png');
});
