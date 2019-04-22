/**
 * @format
 */

import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';
import { registerScreens } from './screens';
import { goToAuth, goToMainTabs } from './src/navigation';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerScreens();

/*Navigation.registerComponent(
  `navigation.playground.WelcomeScreen`,
  () => RNRedux
);*/

Navigation.events().registerAppLaunchedListener(() => {
  goToAuth();
});
