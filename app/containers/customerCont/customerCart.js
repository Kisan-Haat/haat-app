import React, { Component } from "react";
import { View, Text, ListView, FlatList, StyleSheet } from "react-native";
import {
  Button,
  Card,
  TextInput,
  BottomNavigation,
  Title,
  Paragraph,
  ActivityIndicator,
  Colors,
  Divider,
  TouchableRipple,
  FAB,
  IconSource
} from "react-native-paper";
import globalStyle from "../../global.style";
import HeaderComponent from "../../components/header.component";
import I18n from "../../utils/I18n";
import Currency from "../../components/currency.component";
import ApiHelper from "../../utils/api.helper";

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    paddingTop: "2%",
    paddingLeft: "2%",
    paddingRight: "2%",
    borderColor: "#ffffff",
    borderWidth: 3,
    backgroundColor: "#ffffff"
  },
  card: {
    elevation: 8,
    backgroundColor: "#FAFAFA"
  },
  button: {
    color: "#6202EE"
  },
  subtext: {
    fontSize: 12
  },
  text: {
    color: "#000",
    fontSize: 16
  },
  Title: {
    fontSize: 20
  },
  subTitle: {
    fontSize: 14
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#6202EE"
  },
  textHeader: {
    paddingTop: 20,
    fontSize: 22,
    color: "#000",
    fontWeight: "300",
    textAlign: "center"
  }
});
export default class ConsumerC extends Component {
  state = {
    data: [],
    page: 1,
    loading: true,
    loadingMore: false,
    error: null,
    isEmpty: true
  };

  _handleLoadMore = () => {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      isLoading: true,
      list: []
    };
    this.getCartList();
  }

  static navigationOptions = {};

  emptyCartCheck = () => {};

  removeCartItem = () => {};

  getCartList = () => {
    ApiHelper.getCropList().then(res => {
      this.setState({
        list: res.data.docs
      });
      console.log("data ===== ", res.data.docs);
    });
  };
  state = {
    text: ""
  };
  keyExtractor = (item, index) => index.toString();

  render() {
    if (this.state.list.length == undefined || this.state.list.length < 1) {
      return (
        <View paddingTop={30}>
          <Text style={styles.textHeader}>Your Cart is Empty</Text>
          <Text style={styles.textHeader}>Add items using the Feed</Text>
        </View>
      );
    } else {
      return (
        <View>
          <FAB
            style={styles.fab}
            icon="send"
            onPress={() => console.log("Pressed")}
          />
          <FlatList
            contentContainerStyle={{ paddingBottom: 55 }}
            data={this.state.list}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <Card style={styles.card}>
                  <Card.Cover source={{ uri: item.image }} />
                  <Card.Title
                    title={item.hindi_name}
                    subtitle={item.english_name}
                    right={props => (
                      <Text style={{ marginRight: 25 }}>cost per uom</Text>
                    )}
                  />
                  <Card.Actions>
                    <Button
                      icon="account-box"
                      style={{ size: 52 }}
                      uppercase={false}
                      labelStyle={{ color: "rgba(0, 0, 0, 0.87)" }}
                      color="#757575"
                      font="Roboto"
                    >
                      Farmer Name
                    </Button>
                  </Card.Actions>
                  <Divider inset />
                  <Card.Actions>
                    <TextInput
                      style={{ width: 213, height: 56, marginRight: 60 }}
                      selectionColor="#757575"
                      underlineColor="#757575"
                      mode="outlined"
                      textAlignVertical="center"
                      label="Quantity"
                      value={this.state.text}
                      onChangeText={text => this.setState({ text })}
                      keyboardType={"numeric"}
                    />
                    <Text style={styles.text}>
                      Remaining {"\n"}
                      Inventory
                    </Text>
                  </Card.Actions>
                  <Card.Content>
                    <Text style={styles.subtext}>Ordering in uom</Text>
                  </Card.Content>
                  <Card.Actions>
                    <Button
                      color="#6202EE"
                      onPress={() => this.removeCartItem(item)}
                    >
                      Remove
                    </Button>
                  </Card.Actions>
                </Card>
              </View>
            )}
            keyExtractor={this.keyExtractor}
          />
        </View>
      );
    }
  }
}
