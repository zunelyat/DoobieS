// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DoobieSQL title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DoobieSQL/i);
    expect(titleElement).toBeInTheDocument();
});
