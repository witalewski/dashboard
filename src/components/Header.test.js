import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Header } from './Header';

describe('Header', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header title="Dashboard" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
