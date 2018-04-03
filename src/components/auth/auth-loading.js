import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import storage from '../../services/storage';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.checkUserLogin();
  }

  /**
   * checkUserLogin - Checks if a user token is stored in storage and loads screens accordingly.
   * @returns {void}
   */
  checkUserLogin = async () => {
    const userToken = await storage.get('userToken');

    // Just to delay the async operation.
    // setTimeout(() => {
    //   this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    // }, 1000);
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle: {
      alignItems: 'center',
        justifyContent: 'center',
    }
});

export default AuthLoadingScreen;
