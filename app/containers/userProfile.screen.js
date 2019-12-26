import React, { Component } from "react";
import {
  View,
  AsyncStorage,
  StyleSheet,
  Text
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph, withTheme } from 'react-native-paper';
import HeaderComponent from "../components/header.component";
import Apihelper from "../utils/api.helper";
import { Container } from "native-base";

class UserProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
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
      console.log(JSON.parse(user))
    });
  }
  render() {
    return (
      <Container>
        <HeaderComponent
          style={{ shadowColor: "transparent", elevation: 6  }}
          title="Profile"
        />
        <Card style={{margin: 8}}>
        <Card.Title title= {this.state.user.partyName} subtitle={this.state.user.role} left={(props) => <Avatar.Icon {...props} icon="folder" />} />
        <Card.Content> 
          <Text>Id: {this.state.user.partyId}</Text> 
          <Text>Phone: {this.state.user.phone}</Text>
        </Card.Content>
        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
        <Card.Actions>
          <Button mode="contained" onPress={this._logout}>
            logout
          </Button>
        </Card.Actions>
      </Card>
        <View >
        </View>
      </Container>
    );
  }
}
export default withTheme(UserProfileScreen);

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: "#6202EE",
    height: 60
  },
  avatar: {
    margin: 0,
    width: 56,
    height: 56,
    alignSelf: "center",
    position: "absolute",
  },

  body: {
    marginTop: '50%'
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
  }
});
   
