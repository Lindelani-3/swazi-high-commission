import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Integration Tests', () => {
  test('navigates to Discover Eswatini', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  
    // Select the navigation bar
    // const navbar = screen.getByRole('navigation');
  
    // Use getByRole within the navigation bar to select the link specifically
    // const aboutLink = within(navbar).getByRole('link', { name: /Discover Eswatini/i });
    // userEvent.click(aboutLink);

    // expect(await screen.findByRole('heading', { name: /Discover Eswatini/i })).toBeInTheDocument();


  });

  test('navigates to Home page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  
    // Select the navigation bar
    const navbar = screen.getByRole('navigation');
  
    // Use getByRole within the navigation bar to select the link specifically
    const aboutLink = within(navbar).getByRole('link', { name: /Home/i });
    userEvent.click(aboutLink);

    // expect(await screen.findByText(/Welcome to the Swazi High Commission/i)).toBeInTheDocument();

  });


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

    // expect(await screen.findByText(/About Us/i)).toBeInTheDocument();

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
  
    // expect(await screen.findByText(/You can reach us at contact@swazihighcom.co.za/i)).toBeInTheDocument();
  });
});
