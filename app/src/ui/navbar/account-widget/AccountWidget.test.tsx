import { screen, render } from 'tests';

import { AccountWidget } from './AccountWidget';

describe('AccountWidget', () => {
  it('renders children correctly', () => {
    render(
      <AccountWidget>AccountWidget</AccountWidget>,
    );

    const element = screen.getByText('AccountWidget');

    expect(element).toBeInTheDocument();
  });
});
