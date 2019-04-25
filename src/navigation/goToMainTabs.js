import { Navigation } from 'react-native-navigation';
import getScreenName from '../screens/getScreenName';
import Icon from 'react-native-vector-icons/Ionicons';

export const goToMainTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30)
  ]).then((sources) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'MainTabsId',
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: getScreenName('FindPlaceScreen'),
                      options: {
                        topBar: {
                          visible: false,
                          height: 0
                        }
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Find Place',
                    icon: sources[0]
                  }
                }
              }
            },
            {
              component: {
                name: getScreenName('SharePlaceScreen'),
                options: {
                  bottomTab: {
                    text: 'Share Place',
                    fontSize: 12,
                    icon: sources[1]
                  }
                }
              }
            }
          ]
        }
      }
    });
  });
};
