import * as React from 'react';
import { Button, Card, Title, Paragraph, Divider, Text, Icon, StyleSheet, View } from 'react-native-paper';
import {styles} from '../../global.style';
//import View from 'react-native'
//import Icon from 'native-base'

/* const styles = StyleSheet.create ({
  icon: {
     flex: '1',
     height: 'auto',
     flexDirection: 'row',
     
  },
  info: {
    flex: '3',
    flexDirection: 'row',

    
  }
}) */
const FarmerO = () => (
  <Card>
    
    
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>Hindi Name</Title>
      <Paragraph>English Name</Paragraph>
      
      
      {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, color: 'red', fontWeight: '200' }}>LEFT_ELEM</Text>
        </View>
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Text style={{ textAlign:'center' }}>CENTER</Text>
        </View>
        <View
          style={{ flex: 1, paddingRight: 10 }}>
        </View>
      </View> */}
    </Card.Content>
    
    <Card.Content>
      <Button icon="account-box"/>
      <Text>Customer Name</Text>
    </Card.Content>
    <Card.Actions>
      <Button icon="phone"/>
      <Text>Contact Number</Text>
    </Card.Actions>
    
      
    <Divider style={{alignContent:'flex-end'}}/>
    <Card.Actions>
      <Button color="#6202EE">Complete</Button>
      <Button color="#6202EE">Contact</Button>
    </Card.Actions>
  </Card>
);
export default FarmerO;