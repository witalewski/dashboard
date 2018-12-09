import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { PaymentMethodsSectionWrapper } from './PaymentMethodsSectionWrapper';

describe('PaymentMethodsSectionWrapper', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <PaymentMethodsSectionWrapper data={mockChartData.paymentMethods.data} />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
