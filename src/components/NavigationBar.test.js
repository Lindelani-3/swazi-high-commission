import { render, screen, fireEvent } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NavigationBar', () => {
  test('renders navigation links', () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    expect(screen.getByText(/Discover Eswatini/i)).toBeInTheDocument();
    expect(screen.getByText(/Consular Services/i)).toBeInTheDocument();
  });

  test('renders dropdown content on hover', async () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );
    // Hover over the "Consular Services" dropdown
    const dropdown = screen.getByText(/Consular Services/i);
    fireEvent.mouseOver(dropdown);

    // Check if "Visa Information" and "Passport Services" links are rendered
    expect(screen.getByText(/Visa Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Passport Services/i)).toBeInTheDocument();
  });
});
