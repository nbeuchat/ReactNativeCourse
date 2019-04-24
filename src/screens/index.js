import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { name as appName } from '../../app.json';
import configureStore from '../store/configureStore';
import AuthScreen from './Auth';
import FindPlaceScreen from './FindPlace/index.js';
import SharePlaceScreen from './SharePlace/index.js';

const store = configureStore();

export function getScreenName(componentName) {
  return `${appName}.${componentName}`;
}

export function registerScreens() {
  Navigation.registerComponentWithRedux(
    getScreenName('AuthScreen'),
    () => AuthScreen,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    getScreenName('FindPlaceScreen'),
    () => FindPlaceScreen,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    getScreenName('SharePlaceScreen'),
    () => SharePlaceScreen,
    Provider,
    store
  );
}
