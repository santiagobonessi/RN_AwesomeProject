/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Main, Login, Signup } from './components/screens';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Main'
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Welcome back'
      }
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        title: 'Join us'
      }
    }
  },
  {
    initialRouteName: 'Main',
  }
)

export default createAppContainer(AppNavigator);
