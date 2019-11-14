import React, { Component } from "react";
import dispatch from "react-redux";
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
  TouchableRipple
} from "react-native-paper";
import globalStyle from "../../global.style";
import HeaderComponent from "../../components/header.component";
import I18n from "../../utils/I18n";
import Currency from "../../components/currency.component";
import ApiHelper from "../../utils/api.helper";
import { ADD_TO_CART } from "../../constants/ActionTypes";

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
  }
});
export default class ConsumerF extends Component {

  _handleLoadMore = () => {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      isLoading: true,
      list: [],
      cart: [],
      data: [],
      page: 1,
      loading: true,
      loadingMore: false,
      error: null,
      text: ""
    };
    this.getCartList();
  }

  static navigationOptions = {};

  getCartList = () => {
    ApiHelper.getCropList().then(res => {
      this.setState({
        list: res.data.docs
      });
      console.log("data ===== ",res.data.docs)
    });
  };

  keyExtractor = (item,index) => index.toString();
  
  addToCart(item){
    let updateCart = this.state.cart || [];
    updateCart.push(item);
    this.setState({cart: updateCart})
    alert("add to cart"+ JSON.stringify(this.state.cart));

    dispatch.addToCart({
      type: ADD_TO_CART,
      payload: this.cart,
    })
  }

  render() {
    return (
      <View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 55 }}
          data={this.state.list}
          renderItem={({ item, index }) => ( 
            <View  style={styles.item}>
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
                    mode="outlined"
                    textAlignVertical="center"
                    label="Quantity"
                    value={this.state.text}
                    onChangeText={text => {
                      this.setState({ text });
                      item.quantity = text
                  }}
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
                  <Button color="#6202EE" onPress={()=>this.addToCart(item)}>Add to cart</Button>
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
