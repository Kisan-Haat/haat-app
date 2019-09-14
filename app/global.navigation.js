import {createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator} from 'react-navigation';
import HomeScreen from './containers/home.screen';
import LoginScreen from './containers/login.screen';
import AuthLoadingScreen from './containers/authLoading.screen';
import UserProfileScreen from './containers/userProfile.screen';
import I18n from '../app/utils/I18n';
import farmerPL from './containers/farmTabContainer';
import fTC from './containers/farmTabContainer';


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
            drawerLabel: I18n.t("home")
        },
        screen: HomeScreen
    },
    UserProfile: {
        navigationOptions: {
            drawerLabel: I18n.t("userProfile")
        },
        screen: UserProfileScreen
    },
    Test:{
        navigationOptions:{
            drawerLabel: "farmTestScreen"
        },
        screen: fTC

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