import {createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator} from 'react-navigation';
//import HomeScreen from './containers/home.screen';
import SignUpScreen from './containers/signUp';
import Login from './containers/login.screen';

import AuthLoadingScreen from './containers/authLoading.screen';
import UserProfileScreen from './containers/userProfile.screen';
import I18n from '../app/utils/I18n';
import farmerPL from './containers/farmTabContainer';
import FarmerTabs from './containers/farmTabContainer';
import ConsumerTabs from './containers/consumerTabContainer'


const AuthNavigator  = createStackNavigator({
    SignUp:{
        screen: SignUpScreen
}, 
    LoginIn:{
        screen: Login
    }

},
{
    mode: 'modal',
    headerMode: 'none'
})

const MenuDrawerNavigator = createDrawerNavigator({
    ConsumerTabs:{
        navigationOptions:{
            drawerLabel: "Buy "

        },
        screen: ConsumerTabs
    },
    Test:{
        navigationOptions:{
            drawerLabel: "Sell"
        },
        screen: FarmerTabs

    },
    UserProfile: {
        navigationOptions: {
            drawerLabel: "User Profile"
        },
        screen: UserProfileScreen
    }
    
    
});

const AppNavigator = createStackNavigator({
    Main: {
        screen: MenuDrawerNavigator
    }
},
{
    mode: 'modal',
    headerMode: 'none'
});

export default createAppContainer(createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppNavigator,
    Auth: AuthNavigator
},
{
    initialRouteName: 'AuthLoading'
}));