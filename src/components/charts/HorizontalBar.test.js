import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { HorizontalBar } from './HorizontalBar';

describe('HorizontalBar', () => {
  it('matches snapshot at 0%', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<HorizontalBar percent={0} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot at 2%', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<HorizontalBar percent={2} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot at 5%', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<HorizontalBar percent={5} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot at 10%', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<HorizontalBar percent={10} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot at 50%', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<HorizontalBar percent={50} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot at 75%', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<HorizontalBar percent={75} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot at 100%', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<HorizontalBar percent={100} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
