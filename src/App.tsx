import React from 'react';
import {Provider} from 'react-redux';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import {store} from './redux/store';
import Screens from './screens';

export default (): React.ReactFragment => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Screens />
    </ApplicationProvider>
  </Provider>
);
