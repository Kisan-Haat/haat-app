import React, { Component } from "react";
import { View, Text, ListView, FlatList, StyleSheet } from "react-native";
import {
  Button,
  Card,
  BottomNavigation,
  Title,
  Paragraph,
  ActivityIndicator,
  Modal
} from "react-native-paper";
//import globalStyle from '../../global.style';
import HeaderComponent from "../../components/header.component";
import Currency from "../../components/currency.component";
import ApiHelper from "../../utils/api.helper";
import colors from "../../config/theme";
//import PublisherModal from './farmerPublishDialog'
import { ModalComp } from "../example/ModelCreateListing";

const styles = StyleSheet.create({
  item: {
    //flex: '3',
    width: "50%",
    height: "auto",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",

    paddingTop: "5%",
    paddingLeft: "2%",
    paddingRight: "2%"
    //borderColor: '#0477BF',

    //backgroundColor:'#0477BF',
  },
  card: {
    elevation: 1
  },
  view: {
    paddingHorizontal: 12
  }
});

export default class FarmerPS extends Component {
  _handleLoadMore = () => {};

  triggerModal = item => {
    /* alert(JSON.stringify(item)); */
    this.setState({
      currentItem: item
    });
    this.setState({
      showModal: true
    });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      isLoading: true,
      list: [],
      showModal: false,
      currentItem: {}
    };
    this.getCartList();
  }

  static navigationOptions = {};

  getCartList = () => {
    ApiHelper.getCropList().then(res => {
      this.setState({
        list: res.data.docs
      });
    });
  };
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  keyExtractor = (item,index) => index.toString();
  render() {
    return (
      <View style={styles.view}>
        <ModalComp
          modalVisible={this.state.showModal}
          close={() => {
            this.closeModal();
          }}
          currentItem={this.state.currentItem}
        />
        <FlatList
          numColumns={2}
          contentContainerStyle={{ paddingBottom: "4%" }}
          data={this.state.list}
          renderItem={({ item, index }) => (
            <View key={item.id} style={styles.item}>
              <Card
                style={styles.card}
                onPress={() => (
                  this.triggerModal(item), item.hindi_name, item.image
                )}
              >
                <Card.Cover source={{ uri: item.image }} />
                <Card.Title
                  title={item.hindi_name}
                  subtitle={item.english_name}
                />
              </Card>
            </View>
          )}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
