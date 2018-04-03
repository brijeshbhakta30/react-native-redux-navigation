/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { SwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Container } from 'native-base';
import AuthLoadingScreen from './components/auth/auth-loading';
import AppStack from './components/app-routes';
import AuthStack from './components/auth-routes';
import store from './store';

const RootStack = SwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
}, {
  initialRouteName: 'AuthLoading',
});

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <RootStack />
        </Container>
      </Provider>
    );
  }
}
