import { render, screen } from '@testing-library/react';
import { App } from './App';
const {
    GREETING,
} = require('@monoapp/variables');

test('renders GREETING', () => {
    render(<App />);
    const greeting = screen.getByText(GREETING);
    expect(greeting).toBeInTheDocument();
});
