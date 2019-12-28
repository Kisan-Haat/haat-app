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
import ApiHelper from "../../utils/api.helper";
import { PublishModal } from "../Modal/PublishCropModal";

export default class Catalog extends Component {
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
  keyExtractor = (item, index) => index.toString();
  render() {
    if (this.state.list.length == undefined || this.state.list.length < 1) {
      return (
        <View paddingTop={60}>
          <ActivityIndicator size="large" color="#6202EE" />

          <Text style={styles.textHeader}>Loading Catalog</Text>
        </View>
      );
    } else {
    return (
      <View style={styles.container}> 
        <PublishModal
          modalVisible={this.state.showModal}
          close={() => {
            this.closeModal();
          }}
          currentItem={this.state.currentItem}
        />
        <FlatList
          numColumns={2}
          data={this.state.list}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.item}>
              <Card
                style={styles.card}
                onPress={() => (
                  this.triggerModal(item), item.hindi_name, item.image
                )}
              >
                <Card.Cover source={{ uri: item.image }} style={{ height: 168}}/>
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
}


const styles = StyleSheet.create({
  container:{
    padding: 8
  },
  item: {
    width: "50%",
    height: "auto",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  card: {
    elevation: 1,
    margin: 4,
    width: 168,
    height: 244
  },
  textHeader: {
    paddingTop: 20,
    fontSize: 22,
    color: "#000",
    fontWeight: "300",
    textAlign: "center"
  }
});
