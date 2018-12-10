import React from 'react';
import styled from '@emotion/styled';
import '../src/index.css';

import { storiesOf } from '@storybook/react';

import mockChartData from '../src/fixtures/mockChartData.json';
import { getLabelMap } from '../src/utils/getLabelMap';

import { Header } from '../src/components/Header';
import { MainView } from '../src/components/MainView';
import { HorizontalBar } from '../src/components/charts/HorizontalBar';
import { PieChartContent } from '../src/components/sectionContent/PieChartContent';
import { LineChartContent } from '../src/components/sectionContent/LineChartContent';
import { BarChartContent } from '../src/components/sectionContent/BarChartContent';
import { DataSection } from '../src/components/DataSection';
import { CustomContent } from '../src/components/sectionContent/CustomContent';
import { Summary } from '../src/components/Summary';

const DescriptionStyled = styled.div`
  margin: 12px;
  padding: 12px;
  border: 1px solid lightgray;
  background: white;
`;

storiesOf('MainView', module).add('with mock data', () => (
  <DescriptionStyled>
    <h1>MainView</h1>
    <p>
      All data sections in the main view are added in a declarative fashion. The
      DataSection class is responsible for visualizing provided source according
      to it's type.
    </p>
    <p>
      Main view is connected to data source via mobx and passes the data on to
      included sections.
    </p>
    <p>
      This way if data source for the dashboard is changed or the whole state
      management solution is replaced, one only needs to rewire the MainView.
    </p>
    <p>Layout is defined using flexbox, in a single multi-row container.</p>
    <MainView chartData={mockChartData} loadMockChartData={() => {}} />
  </DescriptionStyled>
));

storiesOf('Header', module).add('for Dashboard', () => (
  <DescriptionStyled>
    <h1>Header</h1>
    <p>Displays header with title.</p>
    <Header title="Dashboard" />
  </DescriptionStyled>
));

storiesOf('DataSection', module).add('with various types', () => (
  <DescriptionStyled>
    <h1>DataSection</h1>
    <p>
      Data section renders provided source. Internally, it is using one of the
      components in sectionContent folder, according to the dataType property of
      source.
    </p>
    <p>
      This way, visualization of any new data source can be added in a
      declarative fashion.
    </p>
    <p>
      To support a new data type, a component should be created and added to the
      switch statement in DataSection's getSectionContent function.
    </p>
    <p>
      To avoid defensive programming, this component will fail if provided with
      no data or invalid data structure. Make sure to provide correct data in
      the parent container.
    </p>
    <h2>dataType: 'line2'</h2>
    <DataSection
      title="Revenue This Month vs Revenue Previous Month"
      source={mockChartData.revenueMonthToMonth}
    />
    <h2>dataType: 'pie'</h2>
    <DataSection
      title="Payment methods"
      source={mockChartData.paymentMethods}
    />
    <h2>dataType: 'bar'</h2>
    <DataSection title="Monthly Sales" source={mockChartData.monthlySales} />
    <h2>dataType: 'map'</h2>
    <DataSection title="Map" source={mockChartData.mapChart} />
    <h2>dataType: 'custom'</h2>
    <DataSection title="Summary" source={mockChartData.summaryChart}>
      <Summary data={mockChartData.summaryChart.data} />
    </DataSection>
  </DescriptionStyled>
));

storiesOf('PieChartContent', module).add('for various datasets', () => (
  <DescriptionStyled>
    <h1>PieChartContent</h1>
    <p>Displays provided data as a pie chart.</p>
    <p>
      Intended to be used within DataSection. To avoid defensive programming,
      this component will fail if provided with no data or invalid data
      structure. Make sure to provide correct data in the parent container.
    </p>
    <PieChartContent title="Devices" data={mockChartData.devices.data} />
    <PieChartContent
      title="Most popular"
      data={mockChartData.mostPopular.data}
    />
    <PieChartContent
      title="Payment methods"
      data={mockChartData.paymentMethods.data}
    />
  </DescriptionStyled>
));

storiesOf('LineChartContent', module).add('for revenue', () => (
  <DescriptionStyled>
    <h1>LineChartContent</h1>
    <p>Displays provided data as a line chart.</p>
    <p>
      Intended to be used within DataSection. To avoid defensive programming,
      this component will fail if provided with no data or invalid data
      structure. Make sure to provide correct data in the parent container.
    </p>
    <LineChartContent
      title="Revenue This Month vs Revenue Previous Month"
      data={mockChartData.revenueMonthToMonth.data}
      labelMap={getLabelMap(mockChartData.revenueMonthToMonth)}
    />
  </DescriptionStyled>
));

storiesOf('BarChartContent', module).add('for monthly sales', () => (
  <DescriptionStyled>
    <h1>BarChartContent</h1>
    <p>Displays provided data as a bar+line chart.</p>
    <p>Intended to be used within DataSection.</p>
    <BarChartContent
      title="Monthly Sales"
      data={mockChartData.monthlySales.data}
      labelMap={getLabelMap(mockChartData.monthlySales)}
    />
  </DescriptionStyled>
));

storiesOf('CustomContent', module).add('for mock data', () => (
  <DescriptionStyled>
    <h1>CustomContent</h1>
    <p>Intended to be used within DataSection.</p>
    <p>
      If data type is "custom", any content can be passed to DataSection as a
      React Child.
    </p>
    <CustomContent title="Summary">
      <Summary data={mockChartData.summaryChart.data} />
    </CustomContent>
  </DescriptionStyled>
));

storiesOf('HorizontalBar', module).add('at various values', () => (
  <DescriptionStyled>
    <h1>HorizontalBar</h1>
    <p>
      Displays a minimal horizontal bar chart for a single item as percentage.
    </p>
    <div>
      <HorizontalBar percent={0} />
      <HorizontalBar percent={2} />
      <HorizontalBar percent={5} />
      <HorizontalBar percent={10} />
      <HorizontalBar percent={50} />
      <HorizontalBar percent={75} />
      <HorizontalBar percent={100} />
    </div>
  </DescriptionStyled>
));
