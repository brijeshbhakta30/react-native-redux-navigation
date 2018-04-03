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
      <View style={styles.viewStyle}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input autoCapitalize={'none'} onChangeText={text => this.handleChange('email', text)} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input autoCapitalize={'none'} onChangeText={text => this.handleChange('password', text)} />
            </Item>
            <Button block dark onPress={this.handleLogin}><Text>Login</Text></Button>
          </Form>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
