import { screen, render } from 'tests';

import { NotFound } from './NotFound';

describe('NotFound', () => {
  it('renders children correctly', () => {
    render(
      <NotFound>NotFound</NotFound>,
    );

    const element = screen.getByText('NotFound');

    expect(element).toBeInTheDocument();
  });
});
