
import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet,Image } from 'react-native';
import { Button, Card, Title, Paragraph, Divider,} from 'react-native-paper';
import {Icon} from 'native-base';
export const ModalComp = (props) =>{
  const NH_data = () =>{
    if(Object.keys(props.currentItem)){
     return <Text>{props.currentItem.hindi_name}</Text>
    }
    return (<Text>No data</Text>)
  }
  const image = () =>{
    if(Object.keys(props.currentItem)){
     return <Text>{props.currentItem.image}</Text>
    }
    return (<Text>No data</Text>)
  }
  
  
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            
          }}>
          <View styles={styles.ActionBar}>
            <Button style={styles.icon} icon='close' onPress={props.close}></Button>
          </View>
          <View style={styles.container}>
          
          {/* <Image source={{uri: props.currentItem.image}}/> */}
          {NH_data()}
          <Button onPress={props.close}>close</Button>
            <View>
              {/* <Text>{item.hindi_name}</Text> */}
              
              <TouchableHighlight>
              <Text>HIde MOdal</Text>
              </TouchableHighlight>
            </View>
          </View>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
        </Modal>
      </View>
    )
}

const styles= StyleSheet.create({
  container : {
      
  },
  ActionBar : {
      //flex: 3,
      elevation: 4,
      marginLeft: 10,
  },
  icon:{
    fontSize: 100,
    width: 50,
    height: 60,
    alignContent: "stretch",
    
    left: 5,

  
  },
})