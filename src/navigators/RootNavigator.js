import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import {
  addAsyncActivityProcessing,
  removeAsyncActivityProcessing,
} from '@redux/modules/system';
import { getUserSelector } from '@redux/modules/user';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const RootNavigator = props => {
  if (!props.bootstrapped) {
    return <Text>Loading....</Text>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {props.user ? (
          <Stack.Screen name="App" component={AppNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapActionToProps = {
  addAsyncActivityProcessing,
  removeAsyncActivityProcessing,
};

export default connect(
  state => ({ user: getUserSelector(state) }),
  mapActionToProps,
)(RootNavigator);
