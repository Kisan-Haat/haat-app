import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import  globalstyle from '../global.style';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={globalstyle.padded}>
                <Card>
                    <Card.Content>
                        <TextInput
                            label='Username'
                            style={globalstyle.txtInput}
                        />
                        <TextInput
                            label='Password'
                            secureTextEntry={true}
                            style={globalstyle.txtInput}
                        />
                        <Button mode='contained' onPress={() => console.log('Pressed')} style={styles.Button}>Login</Button>
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