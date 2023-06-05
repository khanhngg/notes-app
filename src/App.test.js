import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders "Notes App" text', () => {
  // ARRANGE
  render(<App />);

  // ACT
  const textElement = screen.getByText(/Notes App/i);

  // ASSERT
  expect(textElement).toBeInTheDocument();
});

test('renders four buttons', async () => {
  // ARRANGE
  render(<App />);
  
  // ACT
  const items = await screen.findAllByRole('button');

  // ASSERT
  expect(items).toHaveLength(4);
});

test('toggles Folders Panel', async () => {
  // ARRANGE
  render(<App />);

  // ACT: Hides Folders Panel
  const foldersContainer = screen.getByTestId('folders-container');
  await userEvent.click(screen.getByTestId('folders-toggle-button'));
  
  // ASSERT
  expect(foldersContainer).toHaveClass('hide');
  
  // ACT: Shows Folders Panel
  await userEvent.click(screen.getByTestId('folders-toggle-button'));

  // ASSERT
  expect(foldersContainer).not.toHaveClass('hide');
});