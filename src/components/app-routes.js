import React from 'react';
import { StackNavigator } from 'react-navigation';
import Header from './header';
import Home from './home';

export default StackNavigator({
  Home,
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    title: <Header />,
  },
})
