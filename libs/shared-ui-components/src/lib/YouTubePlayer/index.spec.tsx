import { render } from '@testing-library/react';

import YouTube from './';

describe('Youtube', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<YouTube title="" uid="" />);
    expect(baseElement).toBeTruthy();
  });
});
