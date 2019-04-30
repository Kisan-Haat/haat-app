import React, {Component} from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View
} from "react-native";
import SplashScreen from 'react-native-splash-screen'

export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const authToken = await AsyncStorage.getItem('authToken');
        //TODO we can move it to componentDidMount() of Login and Home Screen
        SplashScreen.hide();
        this.props.navigation.navigate(authToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle='default'/>
            </View>
        )
    }
}