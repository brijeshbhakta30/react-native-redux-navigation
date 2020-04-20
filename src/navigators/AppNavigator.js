import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getStack } from './utils';
import colors from '@helpers/colors';
// screens
import { Home, Messages, NewsFeeds, Profile } from '@screens';

const getTabBarIcon = iconName => ({ color }) => {
  return <Icons name={iconName} size={25} color={color} />;
};

const BottomTabs = createBottomTabNavigator();
const routes = {
  stackOptions: {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: colors.appBlue,
      inactiveTintColor: colors.description,
    },
  },
  screens: [
    {
      name: 'Home',
      component: Home,
      options: { tabBarIcon: getTabBarIcon('ios-home') },
    },
    {
      name: 'NewsFeeds',
      component: NewsFeeds,
      options: { tabBarIcon: getTabBarIcon('md-today') },
    },
    {
      name: 'Messages',
      component: Messages,
      options: { tabBarIcon: getTabBarIcon('ios-mail') },
    },
    {
      name: 'Profile',
      component: Profile,
      options: { tabBarIcon: getTabBarIcon('ios-person') },
    },
  ],
};

const AppNavigator = () => getStack(BottomTabs, routes);

export default AppNavigator;
