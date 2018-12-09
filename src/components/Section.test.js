import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Section } from './Section';

describe('Section', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Section title="Dashboard" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
