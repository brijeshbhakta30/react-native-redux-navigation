import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Content, Form, Item, Input, Label, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { loginUser } from '../../redux/actions/auth.action';

class Login extends React.Component {

  state = {
    credentials: {},
  };

  handleLogin = () => {
    const { credentials } = this.state;
    const { loginUser, navigation } = this.props;
    loginUser(credentials)
      .then(() => navigation.navigate('App'));
  };

  handleChange = (name, value) => {
    const credentials = _.cloneDeep(this.state.credentials);
    credentials[name] = value;
    this.setState({ credentials });
  };

  render() {
    return (
      <Content contentContainerStyle={styles.contentStyle}>
        <Form>
          <Item floatingLabel style={styles.labelItem}>
            <Label>Email</Label>
            <Input autoCapitalize={'none'} onChangeText={text => this.handleChange('email', text)} />
          </Item>
          <Item floatingLabel style={styles.labelItem}>
            <Label>Password</Label>
            <Input autoCapitalize={'none'} onChangeText={text => this.handleChange('password', text)} />
          </Item>
          <Button style={styles.loginButton} block dark onPress={this.handleLogin}><Text>Login</Text></Button>
        </Form>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  labelItem: {
    marginLeft: 0,
  },
  loginButton: {
    marginTop: 10,
  }
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
