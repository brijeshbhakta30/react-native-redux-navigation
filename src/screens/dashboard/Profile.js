import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { AlertBox, Button, NavigationBar } from '../../components';
import { logout } from '../../redux/modules/user';
import styles from './styles';

const Profile = props => {
  const handleLogout = useCallback(() => {
    props.logout().catch(() => AlertBox.alert('Something went wrong'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <NavigationBar title="Profile" />
      <Text style={styles.welcome}>Profile Page</Text>
      <Button title="LOG OUT" style={styles.logout} onPress={handleLogout} />
    </View>
  );
};

const mapActionToProps = { logout };

export default connect(
  null,
  mapActionToProps,
)(Profile);
