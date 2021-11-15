import { screen, render } from 'tests';

import { BusinessCard } from './BusinessCard';

describe('BusinessCard', () => {
  it('renders children correctly', () => {
    render(
      <BusinessCard>BusinessCard</BusinessCard>,
    );

    const element = screen.getByText('BusinessCard');

    expect(element).toBeInTheDocument();
  });
});
