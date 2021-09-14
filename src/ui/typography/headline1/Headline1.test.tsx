import { screen, render } from 'tests';

import { Headline1 } from './Headline1';

describe('Headline1', () => {
  it('renders children correctly', () => {
    render(
      <Headline1>Headline1</Headline1>,
    );

    const element = screen.getByText('Headline1');

    expect(element).toBeInTheDocument();
  });
});
