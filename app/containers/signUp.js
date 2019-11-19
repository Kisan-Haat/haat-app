import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  AsyncStorage,
  Alert,
  SafeAreaView
} from "react-native";
import {
  Card,
  TextInput,
  Button,
  Divider,
  Title,
  Text,
  Switch,
  Chip
} from "react-native-paper";

import globalstyle from "../global.style";
import ApiHelper from "../utils/api.helper";
import I18n from "../utils/I18n";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      verifypassword: "",
      email: "",
      isFarmer: false,
      visable: false
    };
  }

  render() {
    // const { isFarmer } = this.state;
    // const { navigate } = this.props.navigation;
    return (
      <SafeAreaView>
        <View style={globalstyle.padded}>
          <Image
            source={require("../assets/images/hcCrop.png")}
            style={styles.Image}
          />
          <Card style={{ marginTop: 50 }}>
            <Card.Content>
              <Title>Welcome</Title>
              <Divider></Divider>
              <Text style={{ marginTop: 10 }}>
                Please enter your information below
              </Text>
            </Card.Content>
            <Card.Actions style={{ justifyContent: "space-evenly" }}>
              <TextInput
                label={"First Name"}
                style={styles.inputWrap}
                value={this.state.FIRSTNAME}
                onChangeText={text => this.setState({ FIRSTNAME: text })}
              />
              <TextInput
                label={"Last Name"}
                style={styles.inputWrap}
                value={this.state.LASTNAME}
                onChangeText={text => this.setState({ LASTNAME: text })}
              />
            </Card.Actions>
            <Card.Content>
              <TextInput
                label={"Mobile Phone Number"}
                style={globalstyle.txtInput}
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
              />
              <TextInput
                label={"Password"}
                secureTextEntry={true}
                style={globalstyle.txtInput}
                value={this.state.PASSWORD}
                onChangeText={text => this.setState({ PASSWORD: text })}
              />
              <TextInput
                label={"Verify Password"}
                selectionColor={"#000"}
                secureTextEntry={true}
                style={globalstyle.txtInput}
                value={this.state.VERIFYPASSWORD}
                onChangeText={text => this.setState({ VERIFYPASSWORD: text })}
              />
            </Card.Content>
          </Card>
          <Button
            mode="contained"
            onPress={() => this.submit()}
            style={styles.Button}
          >
            Submit
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

submit = () => {
  if (this.state.PASSWORD === this.state.VERIFYPASSWORD) {
    let newUser = {
      name: this.state.firstname,
      phone: this.state.PHONE,
      password: this.state.PASSWORD
    };

    // <Snackbar style={{backgroundColor:'#6202EE'}}>
    //     Success!
    // </Snackbar>;
  } else {
    Alert.alert(
      "Password Mismatch",
      "Please check the password for any mismatches",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }
};
login = () => {
  let user = {
    phone: this.state.PHONE,
    password: this.state.PASSWORD
  };
  alert(JSON.stringify(user));
  ApiHelper.login(user)
    .then(res => {
      alert(JSON.stringify(res.data));
      if (res.data.hasOwnProperty("msg")) {
        Alert.alert("Error", res.data.msg);
      } else {
        AsyncStorage.setItem("authToken", res.data.token);
        this.props.navigation.navigate(res.data.token ? "App" : "Auth");
      }
    })
    .catch(error => {
      console.log(error);
    });
};

const styles = StyleSheet.create({
  Button: {
    marginTop: "5%"
  },
  inputWrap: {
    backgroundColor: "#FFF",
    width: "45%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  chipWrap: {},
  Image: {
    marginLeft: "35%",
    marginTop: "5%",
    marginBottom: "5%",
    width: "30%",
    height: "21%"
  }
});
