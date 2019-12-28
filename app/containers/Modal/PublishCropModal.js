import React, { Component } from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';
import {
  Appbar,
  Title,
  Chip,
  TextInput
} from 'react-native-paper';

export const PublishModal = props => {
  const NH_data = () => {
    if (Object.keys(props.currentItem)) {
      return (
        <Title style={{ fontSize: 20, marginLeft: 16 }}>
          {props.currentItem.hindi_name}
        </Title>
      );
    }
    return <Text>No data</Text>;
  };

  submit = () => {
    let originalPoster = {
      hindiName: this.state.hindiName,
    }
  }

  return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
        onRequestClose={props.close}
      >
        {/* Top Control Bar */}
        <SafeAreaView>
        <Appbar>
          <Appbar.Action
            icon="close"
            style={styles.icon}
            onPress={props.close}
          />
          <Title>List Product</Title>
          <Appbar.Content
            titleStyle={{ textAlign: "right", color: "#FFF", fontSize: 14}}
            title ="Publish"
          />
        </Appbar>

        <View>
          <Image
            source={{ uri: props.currentItem.image }}
            style={{ width: 414, height: 192, resizeMode: "cover" }}
          />

          {NH_data()}
          <Title style={{ fontSize: 14, marginLeft: 16 }}>
            {props.currentItem.english_name}
          </Title>
        </View>
        <View>
          <TextInput
            style={styles.TextInput}
            label="Inventory"
            onChangeText={text => this.setState({ text })}
            keyboardType={'numeric'}
          />
          <Text style={styles.Text}>Enter how much stock you have</Text>
          <View
            style={{
              marginLeft: 16,
              marginRight: 16,
              paddingTop: 22,
              paddingBottom: 49,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <ScrollView horizontal={true} >
              
            <Chip onPress={() => console.log("Pressed")}>kg</Chip>
            <Chip onPress={() => console.log("Pressed")}>mg</Chip>
            <Chip onPress={() => console.log("Pressed")}>liters</Chip>
            <Chip onPress={() => console.log("Pressed")}>ml</Chip>
            <Chip onPress={() => console.log("Pressed")}>gram</Chip>
            <Chip onPress={() => console.log("Pressed")}>unit</Chip>
            
            </ScrollView>
          </View>
          <TextInput
            style={styles.TextInput}
            label="Rate per unit"
            onChangeText={text => this.setState({ text })}
            keyboardType={'numeric'}
          />
          <Text style={styles.Text}>
            Enter the price the customer will pay per unit
          </Text>
        </View>
        </SafeAreaView>
      </Modal>
  );
};

const styles = StyleSheet.create({
  ActionBar: {
    //flex: 3,
    elevation: 4,
    marginLeft: 10
  },
  icon: {
    width: 50,
    height: 60,
    alignContent: "stretch",
    left: 5
  },
  TextInput: {
    marginLeft: 16,
    marginRight: 16,
    height: 56
  },
  Text: {
    marginLeft: 32
  },
  chip:{
    marginRight:5,
  }
});
