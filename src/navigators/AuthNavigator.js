import { createStackNavigator } from '@react-navigation/stack';
import { getStack } from './utils';
import { Login, Register } from '@screens';

const Stack = createStackNavigator();
const routes = {
  screens: [
    { name: 'Login', component: Login },
    { name: 'Register', component: Register },
  ],
};

const AuthNavigator = () => getStack(Stack, routes);

export default AuthNavigator;
