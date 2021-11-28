import { screen, render } from 'tests';

import { Switch } from './Switch';

describe('Switch', () => {
  it('renders children correctly', () => {
    render(
      <Switch>Switch</Switch>,
    );

    const element = screen.getByText('Switch');

    expect(element).toBeInTheDocument();
  });
});
