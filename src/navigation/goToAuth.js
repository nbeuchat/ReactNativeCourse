import { Navigation } from 'react-native-navigation';
import getScreenName from '../screens/getScreenName';

export const goToAuth = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Auth',
        children: [
          {
            component: {
              name: getScreenName('AuthScreen'),
              options: {
                topBar: {
                  title: {
                    text: 'Authentication'
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
};