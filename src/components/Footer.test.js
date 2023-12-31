import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Footer', () => {
  test('renders contact information', () => {
    render(<Footer />);
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Email: info@swazihighcom.co.za/i)).toBeInTheDocument();
  });

  test('renders quick links', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText(/Quick Links/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Eswatini Government/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Discover Eswatini/i })).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2023 Swazi High Commission, All Rights Reserved/i)).toBeInTheDocument();
  });
});
