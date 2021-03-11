/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Router from '@/router';
import dva from '@/utils/dva';
import models from '@/models';
import { globalConst } from '@/assets/styles/globalConst';

const app = dva({
  models,
});
EStyleSheet.build({ ...globalConst });
const App = app.start(<Router />);

export default App;
