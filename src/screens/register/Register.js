import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { AlertBox, Button, FormInput } from '@components';
import { REGISTER_FORM } from '@constants/formConstants';
import { required, validateEmail, validatePassword } from '@helpers/validators';
import { registerUser } from '@redux/modules/user';
import styles from './styles';

const Register = props => {
  const onRegisterUser = data => {
    props.registerUser(data).catch(err => AlertBox.alert(err.message));
  };

  const onLogin = useCallback(() => {
    props.navigation.navigate('Login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Field
        name="name"
        component={FormInput}
        validate={[required]}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
      <Field
        name="email"
        component={FormInput}
        validate={[required, validateEmail]}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
      <Field
        name="password"
        component={FormInput}
        validate={[required, validatePassword]}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <Field
        name="confirmPassword"
        placeholder="confirm password"
        component={FormInput}
        validate={[required, validatePassword]}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <Text style={styles.loginNow} onPress={onLogin}>
        Already registered?
      </Text>
      <Button
        title="REGISTER"
        onPress={props.handleSubmit(onRegisterUser)}
        style={styles.registerButton}
      />
    </View>
  );
};

const mapActionToProps = {
  registerUser,
};

export default reduxForm({ form: REGISTER_FORM })(
  connect(
    null,
    mapActionToProps,
  )(Register),
);
