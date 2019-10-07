import React, { Component } from 'react';
import {Dimensions} from 'react-native'
import { Container, Header, Content, Tab, Tabs, title, TabHeading, Icon, Text, Label,} from 'native-base';
import {StyleSheet} from 'react-native'
import FarmerPS from './farmerCont/farmerPublishScreen';
import FarmerPL from './farmerCont/farmerPublishedList';
import FarmerO from './farmerCont/farmerOrders';
import HeaderComponent from '../components/header.component';

const styles = StyleSheet.create ({
  tab: {
    backgroundColor: '#ffffff',
    
    
  },
  tabs:{
    //tabBarUnderlineStyle: 'rgba(0, 0, 0, 0.12)',

  },
  
  tabUnderline:{
    backgroundColor:'#6202EE'
  },

  title:{
    alignItems:'center',
    alignItems:'center',
    color:'rgba(0,0,0,.6)',
    justifyContent: 'center'
    
  }

})
const screenHeight = Dimensions.get('window').height;

export default class FarmerTabs extends Component {
  render() {
    return (
      
      <Container>
        <HeaderComponent title="Sell" />
        <Tabs  tabContainerStyle={{height:screenHeight / 11}}  tabBarUnderlineStyle	={styles.tabUnderline}>
          <Tab style={styles.title} heading={<TabHeading style={styles.tab}><Icon  type="MaterialCommunityIcons" name='playlist-plus' color='rgba(0,0,0,.6)'/><Label>Text</Label></TabHeading>}>
            <FarmerPS />
          </Tab>
          <Tab heading={<TabHeading style={styles.tab}><Icon style={{flex:1}} type="MaterialCommunityIcons" name='store' color='rgba(0,0,0,.6)'/><Text style={styles.title}>{"\n"}Published</Text></TabHeading>}>
            <FarmerPL />
          </Tab>
          <Tab heading={<TabHeading style={styles.tab}><Icon type="MaterialCommunityIcons" name='inbox' color='rgba(0,0,0,.6)'/><Text style={styles.title}>{"\n"}Orders</Text></TabHeading>}>
            <FarmerO />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
