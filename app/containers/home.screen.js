import React, { Component } from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import {Button} from 'react-native-paper';
import globalStyle from '../global.style';

export default class HomeScreen extends Component {
    static navigationOptions = {
    };


    _signOutAsync = async () => {
        await AsyncStorage.removeItem("authToken");
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={globalStyle.container}>
                <Text>Welcome to Home Screen!</Text>
                <Button onPress={this._signOutAsync}>Logout</Button>
             </View>
        );
    }
}


