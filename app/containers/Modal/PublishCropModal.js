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
          <Appbar.Action
            title ="publish"
            style={styles.icon}
            onPress={props.close}
          />
        </Appbar>
          <View style={styles.container}>
              <Image
                source={{ uri: props.currentItem.image }}
                style={{  height: 192, resizeMode: "cover" }}
              />
              {NH_data()}
              <Title style={{ fontSize: 14, marginLeft: 16 }}>
                {props.currentItem.english_name}
              </Title>
              <View style={{marginBottom: 16}}>
                <TextInput
                  style={styles.TextInput}
                  label="Inventory"
                  onChangeText={text => this.setState({ text })}
                  keyboardType={'numeric'}
                />
                <Text>Enter how much stock you have</Text>
              </View>
              <View style={{marginBottom: 16}}>
                <TextInput
                  style={styles.TextInput}
                  label="Rate per unit"
                  onChangeText={text => this.setState({ text })}
                  keyboardType={'numeric'}
                />
                <Text >
                  Enter the price the customer will pay per unit
                </Text>
              </View>
            </View>
        </SafeAreaView>
      </Modal>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 8,
  },
  ActionBar: {
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
    height: 56,
  }
});
