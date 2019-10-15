import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  Image
} from "react-native";
import {
  Button,
  Appbar,
  Card,
  Title,
  Paragraph,
  Divider,
  Chip,
  TextInput,
} from "react-native-paper";
import { Icon } from "native-base";
export const ModalComp = props => {
  const NH_data = () => {
    if (Object.keys(props.currentItem)) {
      return <Title>{props.currentItem.hindi_name}</Title>;
    }
    return <Text>No data</Text>;
  };
  const image = () => {
    if (Object.keys(props.currentItem)) {
      return <Text>{props.currentItem.image}</Text>;
    }
    return <Text>No data</Text>;
  };
  const styles = StyleSheet.create({
    container: {},
    ActionBar: {
      //flex: 3,
      elevation: 4,
      marginLeft: 10
    },
    icon: {
      fontSize: 100,
      width: 50,
      height: 60,
      alignContent: "stretch",

      left: 5
    }
  });
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        {/* Top Control Bar */}
        <Appbar>
          <Appbar.Action
            style={(marginLeft = 0)}
            icon="close"
            style={styles.icon}
            onPress={props.close}
          />
          <Appbar.Header>
            <Title titleStyle={{ fontSize: 20 }}>List Product</Title>
          </Appbar.Header>
          <Appbar.Content
            titleStyle={{ textAlign: "right", color: "#6202EE", fontSize: 14 }}
            title="Publish"
          />
        </Appbar>

        <View>
          <Image source={{ uri: "https://picsum.photos/700" }} />

          {NH_data()}
          <Button onPress={props.close}>close</Button>
          <View>
            {/* <Text>{item.hindi_name}</Text> */}

            <TouchableHighlight>
              <Text>Hide Modal</Text>
              
            </TouchableHighlight>
          </View>
        </View>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
          
        </TouchableHighlight>
        <View>
          <TextInput 
          style={{}}
          label='Inventory'
          onChangeText={text => this.setState({ text })}
          />
            
          
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          
          <Chip onPress={() => console.log('Pressed')}>kg</Chip>
          <Chip onPress={() => console.log('Pressed')}>mg</Chip>
          <Chip onPress={() => console.log('Pressed')}>liters</Chip>
          <Chip onPress={() => console.log('Pressed')}>ml</Chip>
          <Chip onPress={() => console.log('Pressed')}>gram</Chip>
          <Chip onPress={() => console.log('Pressed')}>unit</Chip>

        </View>
      </Modal>
    </View>
  );
};
