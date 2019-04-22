import { Navigation } from 'react-native-navigation';
import { getScreenName } from '../../screens';

export const goToMainTabs = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'MainTabsId',
        children: [
          {
            component: {
              name: getScreenName('AuthScreen'),
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Sign In'
                  //icon: require('./signin.png')
                }
              }
            }
          },
          {
            component: {
              name: getScreenName('AuthScreen'),
              options: {
                bottomTab: {
                  text: 'Sign Up',
                  fontSize: 12
                  //icon: require('./signup.png')
                }
              }
            }
          }
        ]
      }
    }
  });

export const goToAuth = () =>
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
