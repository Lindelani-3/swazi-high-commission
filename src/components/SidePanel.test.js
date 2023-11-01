import { render, screen } from '@testing-library/react';
import SidePanel from './SidePanel';

describe('SidePanel', () => {
  test('renders side panel content', () => {
    render(<SidePanel />);
    expect(screen.getByText(/Latest News/i)).toBeInTheDocument();
    expect(screen.getByText(/Important Notices/i)).toBeInTheDocument();
    expect(screen.getByText(/Advertisements/i)).toBeInTheDocument();

    // Check for specific news items, notices, and ads if needed
    expect(screen.getByText(/News item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Notice 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Ad 1/i)).toBeInTheDocument();
  });
});
