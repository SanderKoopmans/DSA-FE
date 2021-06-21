import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardSearch from './index';
import { CARDS } from '../../App';

test('CardSearch renders placeholder', () => {
  render(<CardSearch cards={CARDS} />);
  expect(screen.getByPlaceholderText(/filter cards/i)).toBeInTheDocument();
});

test('CardSearch filters Cards based on Input', () => {
  render(<CardSearch cards={CARDS} />);

  const searchBar = screen.getByPlaceholderText(/filter cards/i);
  userEvent.type(searchBar, 'Card #1');

  expect(screen.getByText(/Card #1/i)).toBeInTheDocument();
  expect(screen.queryByText(/Alice/i)).not.toBeInTheDocument();
});
