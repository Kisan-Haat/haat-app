import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import globalStyle from '../global.style';

export default class HomeScreen extends Component {
    static navigationOptions = {
    };
    render() {
        return (
            <View style={globalStyle.container}>
                <Text>Welcome to Home Screen!</Text>
             </View>
        );
    }
}


