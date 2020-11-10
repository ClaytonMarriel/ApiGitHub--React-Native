import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './src/pages/Main'
import User from './src/pages/User'

const Routes = createAppContainer(
    createStackNavigator({
      Main, 
      User,
    },{
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF'
      }
    })
)

export default Routes