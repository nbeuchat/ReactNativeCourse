/**
 * @format
 */

import React from 'react';
import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens/registerScreens';
import { goToAuth } from './src/navigation';
import configureStore from './src/store/configureStore';

const store = configureStore();

registerScreens(store);

Navigation.events().registerAppLaunchedListener(() => {
  goToAuth();
});
