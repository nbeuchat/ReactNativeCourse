import { Navigation } from 'react-native-navigation';
import { name as appName } from './app.json';

import AuthScreen from './src/screens/Auth';

export function getScreenName(componentName) {
  return `${appName}.${componentName}`;
}

export function registerScreens() {
  Navigation.registerComponent(getScreenName('AuthScreen'), () => AuthScreen);
}
