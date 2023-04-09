import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
	it('should render list items', () => {
		const { getByText } = render(<App />);

		expect(getByText('Luiz')).toBeInTheDocument();
		expect(getByText('Marcos')).toBeInTheDocument();
		expect(getByText('Jesus')).toBeInTheDocument();
	});

	it('should be able to add new item to the list', async () => {
		const { getByText } = render(<App />);

		const addButton = getByText('Adicionar');

		userEvent.click(addButton);

		await waitFor(() => {
			expect(getByText('Novo')).toBeInTheDocument();
		});
	});
});
