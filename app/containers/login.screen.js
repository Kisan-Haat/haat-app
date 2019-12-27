import React, { Component } from 'react';
import { View, StyleSheet, Image, AsyncStorage, Alert, SafeAreaView } from 'react-native';
import { Card, TextInput, Button, Divider, Text } from 'react-native-paper';

import globalstyle from '../global.style';
import ApiHelper from '../utils/api.helper';
import I18n from '../utils/I18n';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
        };
    }

 login = () => {
     let user = {
      phone: this.state.PHONE,
      password: this.state.PASSWORD
     }
     //alert(JSON.stringify('gate 1 pass',user)); //gate 1
     ApiHelper.login(user)
         .then(res => {
            if(res.status === 200){
            if (res.data.hasOwnProperty('msg')) {
                 Alert.alert('Error', res.data.msg);
             } else {
                 AsyncStorage.setItem("authToken", res.data.token);
                 AsyncStorage.setItem("authData", JSON.stringify(res.data)).then(data => alert(data));
                 this.props.navigation.navigate(res.data.token ? 'App' : 'Auth');
             }
            }
            else{
                alert(JSON.stringify(res.data))
            }
         })
         .catch(error => {
           alert('Invalid Credentials')
             console.log(error);
             return;
         });
        }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView>
                <View style={globalstyle.padded}>
                <Image
                                source={require('../assets/images/hc.png')}
                                style={styles.Image}
                            />
                    <Card style={styles.bottom}>
                        <Card.Content>
                            
                            <TextInput
                                label={"Phone"}
                                style={globalstyle.txtInput}
                                value={this.state.PHONE}
                                onChangeText={(text) => this.setState({ PHONE: text })}
                                keyboardType={"numeric"}
                            />
                            <TextInput
                                label={"Password"}
                                secureTextEntry={true}
                                style={globalstyle.txtInput}
                                value={this.state.PASSWORD}
                                onChangeText={(text) => this.setState({ PASSWORD: text })}
                            />
                            <Button mode='contained' onPress={() => this.login()} style={styles.Button}>{"login"}</Button>
                            
                            {/* <Button mode='outlined' onPress={() => navigate('SignUp')} style={{ marginTop: '5%'}}>{"Register"}</Button> */}
                    
                            {/* <Button mode='contained' onPress={() => this.login()} style={styles.Button}>Sign Up</Button>  */}

                            
                        </Card.Content>
                    </Card>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    Card: {
        flex: 1,
        alignItems: 'center'
    },
    Image: {
        marginTop: '10%',
        width: '100%',
        height: '30%'
    },
    Button: {
        marginTop: '10%'
    },
    bottom: {
        
        justifyContent: 'flex-end',
        marginBottom: 36
    }
});