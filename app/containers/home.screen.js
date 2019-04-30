import React, { Component } from 'react';
import { View, Text } from 'react-native';
import globalStyle from '../global.style';
import HeaderComponent from '../components/header.component';
import I18n from '../utils/I18n';
import Currency from '../components/currency.component';

export default class HomeScreen extends Component {
    static navigationOptions = {
    };

    render() {
        return (
            <View style={globalStyle.container}>
                <HeaderComponent title="React Native SDK" />
                <Text>{ I18n.t("welcome") }</Text>
                <Currency value={1000} currency_code="EUR" />
            </View>
        );
    }
}


