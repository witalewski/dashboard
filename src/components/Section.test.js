import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Section } from './Section';

describe('Section', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Section title="Dashboard" className="section">
        <div className="content">Section content</div>
      </Section>
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
