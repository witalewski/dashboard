import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { MainView } from './MainView';

describe('MainView', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MainView />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
