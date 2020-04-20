import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { AlertBox, Button, NavigationBar } from '../../components';
import { getUserSelector } from '../../redux/modules/user';
import styles from './styles';

class Home extends Component {
  onShowAlert = () => {
    const {
      user: { name },
    } = this.props;
    AlertBox.alert(`Hello ${name}, Have a great day ahead.`);
  };

  render() {
    const { user } = this.props;
    console.log('User: ', user);
    return (
      <View style={styles.container}>
        <NavigationBar title="Home" />
        <Text style={styles.welcome}>Hello {user && user.name}</Text>
        <Button title="Show alert" onPress={this.onShowAlert} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: getUserSelector(state),
});

export default connect(mapStateToProps)(Home);
