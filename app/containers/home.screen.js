import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import globalStyle from '../global.style';
import HeaderComponent from '../components/header.component';

export default class HomeScreen extends Component {
    static navigationOptions = {
    };

    render() {
        return (
            <View style={globalStyle.container}>
                <HeaderComponent title="React Native SDK" />
                <Text>Welcome to Home Screen!</Text>
            </View>
        );
    }
}


