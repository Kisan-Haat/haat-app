import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet, } from 'react-native';
import { Button } from 'react-native-paper';
export const ModalComp = (props) =>{
//   state = {
//     modalVisible: false,
//   };

//   setModalVisible = (visible) => {
//     this.setState({modalVisible: visible});
//   }

  
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            
          }}>
           
          <View style={{marginTop: 22}}>
          <Button onPress={props.close}>close</Button>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    )
}

const styles= StyleSheet.create({
  container: {
      flex: 1
  }
})