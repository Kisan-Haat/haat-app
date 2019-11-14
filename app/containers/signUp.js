
import React, { Component } from 'react';
import { View, StyleSheet, Image, AsyncStorage, Alert, SafeAreaView } from 'react-native';
import { Card, TextInput, Button, Divider, Title, Text, Switch, Chip } from 'react-native-paper';

import globalstyle from '../global.style';
import ApiHelper from '../utils/api.helper';
import I18n from '../utils/I18n';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            email: '',
            isFarmer: false,
            

        };
    }

    render() {
        const { isFarmer } = this.state;
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView>
                <View style={globalstyle.padded}>
                    <Card>
                        <Card.Content>
                        
                            <Title>Welcome</Title>
                            <Divider></Divider>
                            <Text>Please enter your mobile and a unique password</Text>
                            </Card.Content>
                            <Card.Actions> 
                            <TextInput
                                label={"First Name"}
                                
                                style={globalstyle.txtInput}
                                value={this.state.FIRSTNAME}
                                onChangeText={(text) => this.setState({ FIRSTNAME: text })}
                            />
                            <TextInput
                                label={"Last Name"}
                                style={globalstyle.txtInput}
                                value={this.state.LASTNAME}
                                onChangeText={(text) => this.setState({ LASTNAME: text })}
                            />
                            </Card.Actions>
                            <Card.Content>
                            <TextInput
                                label={"Mobile Phone Number"}
                                style={globalstyle.txtInput}
                                value={this.state.email}
                                onChangeText={(text) => this.setState({ email: text })}
                            />
                            <TextInput
                                label={"Password"}
                                secureTextEntry={true}
                                style={globalstyle.txtInput}
                                value={this.state.PASSWORD}
                                onChangeText={(text) => this.setState({ PASSWORD: text })}
                            />
                            <TextInput
                                label={"Verify Password"}
                                secureTextEntry={true}
                                style={globalstyle.txtInput}
                                value={this.state.PASSWORD}
                                onChangeText={(text) => this.setState({ PASSWORD: text })}
                            />

                            

                            <Button mode='contained' onPress={() => this.login()} style={styles.Button}>Submit</Button>
                            <Divider></Divider>
                            <Button mode='contained' onPress={() => navigate("LogIn")}>Returning Users</Button> 

                            
                        </Card.Content>
                    </Card>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    
    Button: {
        marginTop: '5%'
    },
    inputWrap: {
        display: "flex",
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    chipWrap: {

    },
});