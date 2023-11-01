import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Integration Tests', () => {
  test('navigates to About page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  
    // Select the navigation bar
    const navbar = screen.getByRole('navigation');
  
    // Use getByRole within the navigation bar to select the link specifically
    const aboutLink = within(navbar).getByRole('link', { name: /About/i });
    userEvent.click(aboutLink);
  
    expect(await screen.findByText(/This is the About page/i)).toBeInTheDocument();
  });
  

  test('navigates to Contact page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  
    // Select the navigation bar
    const navbar = screen.getByRole('navigation');
  
    // Use getByRole within the navigation bar to select the link specifically
    const contactLink = within(navbar).getByRole('link', { name: /Contact/i });
    userEvent.click(contactLink);
  
    expect(await screen.findByText(/You can reach us at contact@swazihighcom.co.za/i)).toBeInTheDocument();
  });
});
