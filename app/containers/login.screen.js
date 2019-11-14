import React, { Component } from 'react';
import { View, StyleSheet, Image, AsyncStorage, Alert, SafeAreaView } from 'react-native';
import { Card, TextInput, Button, Divider } from 'react-native-paper';
import globalstyle from '../global.style';
import ApiHelper from '../utils/api.helper';
import I18n from '../utils/I18n';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    // login = () => {
    //     let user = {
    //         username: this.state.USERNAME,
    //         password: this.state.PASSWORD
    //     }
    //     alert(JSON.stringify(user));
    //     ApiHelper.login(user)
    //         .then(res => {
    //             alert(JSON.stringify(res.data))
    //             if (res.data.hasOwnProperty('msg')) {
    //                 Alert.alert('Error', res.data.msg);
    //             } else {
    //                 AsyncStorage.setItem("authToken", res.data.token);
    //                 this.props.navigation.navigate(res.data.token ? 'App' : 'Auth');
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    render() {
        return (
            <SafeAreaView>
                <View style={globalstyle.padded}>
                    <Card>
                        <Card.Content>
                        <Image
                                source={require('../assets/images/hc.png')}
                                style={styles.Image}
                            />
                            <TextInput
                                label={I18n.t("username")}
                                style={globalstyle.txtInput}
                                value={this.state.USERNAME}
                                onChangeText={(text) => this.setState({ USERNAME: text })}
                            />
                            <TextInput
                                label={I18n.t("password")}
                                secureTextEntry={true}
                                style={globalstyle.txtInput}
                                value={this.state.PASSWORD}
                                onChangeText={(text) => this.setState({ PASSWORD: text })}
                            />
                            <Button mode='contained' onPress={() => this.login()} style={styles.Button}>{"login"}</Button>
                    
                            {/* <Button mode='contained' onPress={() => this.login()} style={styles.Button}>Sign Up</Button>  */}

                            
                        </Card.Content>
                    </Card>
                </View>
            </SafeAreaView>
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