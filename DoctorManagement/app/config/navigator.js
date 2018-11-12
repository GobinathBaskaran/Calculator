import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Login from '../components/Login';

createSwitchNavigator({
    Login: Login
}, {
        initialRouteName: 'Login'
    })