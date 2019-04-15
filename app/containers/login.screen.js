import React, { Component } from 'react';
import {View, StyleSheet, Image, AsyncStorage} from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import  globalstyle from '../global.style';
import ApiHelper from '../utils/api.helper';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    login = () => {
        let user = {
            USERNAME: this.state.USERNAME,
            PASSWORD: this.state.PASSWORD
        }
        ApiHelper.login(user)
            .then(res => {
                console.log(res);
                AsyncStorage.setItem("authToken", res.data.token);
                this.props.navigation.navigate(res.data.token ? 'App' : 'Auth');
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={globalstyle.padded}>
                <Card>
                    <Card.Content>
                        <TextInput
                            label='Username'
                            style={globalstyle.txtInput}
                            value={this.state.USERNAME}
                            onChangeText={(text) => this.setState({USERNAME: text})}
                        />
                        <TextInput
                            label='Password'
                            secureTextEntry={true}
                            style={globalstyle.txtInput}
                            value={this.state.PASSWORD}
                            onChangeText={(text) => this.setState({PASSWORD: text})}
                        />
                        <Button mode='contained' onPress={() => this.login()} style={styles.Button}>Login</Button>
                        <Image
                            source={require('../assets/images/hc.png')}
                            style={styles.Image}
                        />
                    </Card.Content>
                </Card>
            </View>
        );
    }
} 
const styles = StyleSheet.create({
    Image: {
        marginTop: '10%',
        width: '100%',
        height: '30%'
    },
    Button: {
        marginTop: '5%'
    },
});