import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Login from '../components/Login';
import Home from '../components/Home';

export default RootNavigator = createSwitchNavigator({
    Login: Login,
    Home: Home
}, {
        initialRouteName: 'Login'
    })