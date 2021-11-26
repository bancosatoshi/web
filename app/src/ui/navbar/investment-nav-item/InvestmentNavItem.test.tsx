import { screen, render } from 'tests';

import { InvestmentNavItem } from './InvestmentNavItem';

describe('InvestmentNavItem', () => {
  it('renders children correctly', () => {
    render(
      <InvestmentNavItem>InvestmentNavItem</InvestmentNavItem>,
    );

    const element = screen.getByText('InvestmentNavItem');

    expect(element).toBeInTheDocument();
  });
});
