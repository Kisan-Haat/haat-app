import React, {Component} from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View
} from "react-native";

export default class AuthLoadingScreen extends Component<{}> {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const authToken = await AsyncStorage.getItem('authToken');
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