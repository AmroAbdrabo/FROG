// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { RowTitle } from '.';
import { StorybookContainer } from '/imports/ui/StorybookContainer';

storiesOf('UI/RowItems/RowTitle', module).add('with text', () => (
  <StorybookContainer width={300}>
    <RowTitle>Title</RowTitle>
  </StorybookContainer>
));
