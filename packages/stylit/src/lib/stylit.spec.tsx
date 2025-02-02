import { render } from '@testing-library/react';

import Stylit from './stylit';

describe('Stylit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Stylit />);
    expect(baseElement).toBeTruthy();
  });
});
