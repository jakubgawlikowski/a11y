/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
// eslint-disable-next-line no-unused-vars
import { toHaveNoViolations } from 'jest-axe';

import App from './App';

expect.extend(toHaveNoViolations);

describe('MenuButton', () => {
  it('checks a11y rules', async () => {
    const { container } = render(
      <App />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
