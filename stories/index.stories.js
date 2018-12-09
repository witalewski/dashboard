import React from 'react';
import '../src/index.css';

import { storiesOf } from '@storybook/react';

import { Header } from '../src/components/Header';

storiesOf('Header', module).add('for Dashboard', () => (
  <Header title="Dashboard" />
));
