import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import withReduxStoreWrapper from '../store/withReduxStoreWrapper';
import getScreenName from './getScreenName';
import AuthScreen from './Auth';
import FindPlaceScreen from './FindPlace';
import SharePlaceScreen from './SharePlace';

export default function registerScreens(store) {
  Navigation.registerComponent(getScreenName('AuthScreen'), () => AuthScreen);
  Navigation.registerComponent(
    getScreenName('FindPlaceScreen'),
    withReduxStoreWrapper(FindPlaceScreen, store)
  );
  Navigation.registerComponent(
    getScreenName('SharePlaceScreen'),
    withReduxStoreWrapper(SharePlaceScreen, store)
  );
}
