/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Start, Login, Signup, Main, Browse, More } from './screens';

const InitialNavigator = createStackNavigator(
  {
    Start: {
      screen: Start,
      navigationOptions: {
        title: 'Name APP'
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
    initialRouteName: 'Start',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#111',
      },
      headerTintColor: '#ffe',
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '400'
      }
    }
  }
);

const MainNavigation = createBottomTabNavigator(
  {
    Main: {
      screen: Main
    },
    Browse: {
      screen: Browse
    },
    More: {
      screen: More
    }
  }, 
  {
    initialRouteName: 'Main',
  }
);

const RootNavigator = createStackNavigator(
  {
    InitialNavigator: InitialNavigator,
    MainNavigation: MainNavigation
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(RootNavigator);
