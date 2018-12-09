import React from 'react';
import '../src/index.css';

import { storiesOf } from '@storybook/react';

import { Header } from '../src/components/Header';
import { Section } from '../src/components/Section';

storiesOf('Header', module).add('for Dashboard', () => (
  <Header title="Dashboard" />
));
storiesOf('Section', module).add('summary with sample content', () => (
  <Section title="Summary"><div>[Section content]</div></Section>
));
