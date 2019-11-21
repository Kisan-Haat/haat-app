import React, { Component } from "react";
import {
  View,
  AsyncStorage,
  StyleSheet,
  Platform,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-paper";
import HeaderComponent from "../components/header.component";
import Apihelper from "../utils/api.helper";
import {
  ActivityIndicator,
  withTheme,
  Card,
  Avatar,
  List,
  Button
} from "react-native-paper";
import colors from '../config/theme'
import I18n from "../utils/I18n";
import { Container } from "native-base";

class UserProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  _logout = () => {
    Apihelper.logout()
      .then(() => this.props.navigation.navigate("Auth"))
      .catch();
  };
  componentDidMount() {
    AsyncStorage.getItem("authData").then(user => {
      this.setState({ user: JSON.parse(user) });
      alert("phone " + JSON.parse(user).phone);
    });

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
      <Container>
      <HeaderComponent
          style={{ shadowColor: "transparent", elevation: 6 }}
          title="Profile"
      />
      
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={require('../assets/images/account-circle.png')}/>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>User Name</Text>
            <Text style={styles.phone}>Phone Number</Text>
            
            <Button mode='contained' style={styles.buttonContainer} onPress={this._logout}>logout
              
            </Button>
            {/* <Button style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Previous Orders
              </Text>
            </Button> */}
          </View>
        </View>
        </Container>
    );
  }
}
export default withTheme(UserProfileScreen);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6202EE",
    height: 200
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 100
  },
  
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 22
  },
  phone: {
    fontSize: 16,
    color: "#6202EE",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 80,
    height: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    
    backgroundColor: "#6202EE"
  }
});
   





/* const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
        },
     
        bottomView:{
     
          width: '100%', 
          height: 50, 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'absolute',
          bottom: 0
        },
     
        textStyle:{
     
          color: '#fff',
          fontSize:22
        }
    });
 */


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
                                {/* <View>
            <HeaderComponent title="Profile" />
                <View style={styles.MainContainer}>
                    
                </View>
                <View style={styles.bottomView}>
                         <Button mode="contained" onPress={this._logout}>{I18n.t("logout")}</Button>
              
                    </View>
        </View> */}