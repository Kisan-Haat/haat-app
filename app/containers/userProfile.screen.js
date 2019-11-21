import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import HeaderComponent from '../components/header.component';
import Apihelper from '../utils/api.helper';
import { ActivityIndicator, withTheme, Card, Avatar, List, Text, Button } from 'react-native-paper';
import globalStyle from '../global.style';
import I18n from '../utils/I18n';

class UserProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }
    _logout = () => {
        Apihelper.logout().then(() => this.props.navigation.navigate('Auth')).catch();
    }
    componentDidMount() {
        AsyncStorage.getItem('authData').then(user =>{
            this.setState({user: JSON.parse(user)})
            alert('phone '+ JSON.parse(user).phone)
        } )
      
        // Apihelper.getProfileData()
        //     .then(response => {
        //         this.setState({
        //             loading: false,
        //             user: response.data
        //         });
        //     })
        //     .catch(error => {
        //         this.setState({
        //             loading: false
        //         });
        //     });
    }
    render() {
        const { user } = this.state;
        const { colors } = this.props.theme;
        return (
            <View>
                <HeaderComponent title="React Native SDK" />
                <View style={globalStyle.padded}>
                    {
                         <View>
                              {/*   <Card>
                                    <Card.Content style={[globalStyle.flRow, { justifyContent: 'center' }]}>
                                        <Avatar.Icon size={80} icon="person" />
                                    </Card.Content>
                                    <Card.Content>
                                        <List.Section>
                                            <List.Subheader>{I18n.t("userProfile")}</List.Subheader>
                    <Text>{JSON.stringify(user)}</Text>
                                            <List.Item
                                                title={user.phone}
                                                left={() => <List.Icon icon="person" />}
                                            />
                                            <List.Item
                                                title={user.id}
                                                left={() => <List.Icon icon="email" />}
                                            />
                                            {
                                                (user.address)
                                                    ? <View>
                                                        <List.Item
                                                            title={user.address.address1}
                                                            description={<Text>{user.address.city}</Text>}
                                                            left={() => <List.Icon icon="location-city" />}
                                                        />
                                                        <List.Item
                                                            title={user.address.postalCode}
                                                            left={() => <List.Icon icon="my-location" />}
                                                        />
                                                        <List.Item
                                                            title="Asia/Calcutta"
                                                            left={() => <List.Icon icon="watch-later" />}
                                                        /></View> : null
                                            }
                                        </List.Section>
                                    </Card.Content>
                                </Card> */}
                                <View style={{ paddingTop: 8 }}>
                                    <Button mode="contained" onPress={this._logout}>{I18n.t("logout")}</Button>
                                </View>
                            </View>
                    }
                </View>
            </View>
        );
    }
}
export default withTheme(UserProfileScreen);