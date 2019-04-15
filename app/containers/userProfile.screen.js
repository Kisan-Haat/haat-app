import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderComponent from '../components/header.component';
import Apihelper from '../utils/api.helper';
import { ActivityIndicator, withTheme, Card, Avatar, List, Text, Button } from 'react-native-paper';
import globalStyle from '../global.style';

class UserProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            user: null
        }
    }
    _logout = () => {
        Apihelper.logout().then(() => this.props.navigation.navigate('Auth')).catch();
    }
    componentDidMount() {
        Apihelper.getProfileData()
            .then(response => {
                this.setState({
                    loading: false,
                    user: response.data
                });
            })
            .catch(error => {
                this.setState({
                    loading: false
                });
            });
    }
    render() {
        const { loading, user } = this.state;
        const { colors } = this.props.theme;
        return (
            <View>
                <HeaderComponent title="React Native SDK" />
                <View style={globalStyle.padded}>
                    {
                        (loading)
                            ? <ActivityIndicator color={colors.primary} />
                            : <View>
                                <Card>
                                    <Card.Content style={[globalStyle.flRow, { justifyContent: 'center' }]}>
                                        <Avatar.Icon size={80} icon="person" />
                                    </Card.Content>
                                    <Card.Content>
                                        <List.Section>
                                            <List.Subheader>User Profile</List.Subheader>
                                            <List.Item
                                                title={user.partyName}
                                                left={() => <List.Icon icon="person" />}
                                            />
                                            <List.Item
                                                title={user.email}
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
                                </Card>
                                <View style={globalStyle.padded}>
                                    <Button mode="contained" onPress={this._logout}>Logout</Button>
                                </View>
                            </View>
                    }
                </View>
            </View>
        );
    }
}
export default withTheme(UserProfileScreen);