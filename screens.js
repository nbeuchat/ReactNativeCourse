import { Navigation } from 'react-native-navigation';
import { name as appName } from './app.json';

import AuthScreen from './src/screens/Auth';
import FindPlaceScreen from './src/screens/FindPlace/index.js';
import SharePlaceScreen from './src/screens/SharePlace/index.js';

export function getScreenName(componentName) {
  return `${appName}.${componentName}`;
}

export function registerScreens() {
  Navigation.registerComponent(getScreenName('AuthScreen'), () => AuthScreen);
  Navigation.registerComponent(
    getScreenName('FindPlaceScreen'),
    () => FindPlaceScreen
  );
  Navigation.registerComponent(
    getScreenName('SharePlaceScreen'),
    () => SharePlaceScreen
  );
}
