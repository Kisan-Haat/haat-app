import {createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator} from 'react-navigation';
import HomeScreen from './containers/home.screen';
import LoginScreen from './containers/login.screen';
import AuthLoadingScreen from './containers/authLoading.screen';
import UserProfileScreen from './containers/userProfile.screen';


const AuthNavigator  = createStackNavigator({
    Login: LoginScreen
},
{
    mode: 'modal',
    headerMode: 'none'
})

const MenuDrawerNavigator = createDrawerNavigator({
    Home: {
        navigationOptions: {
            drawerLabel: 'Home'
        },
        screen: HomeScreen
    },
    UserProfile: {
        navigationOptions: {
            drawerLabel: 'User Profile'
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