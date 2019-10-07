import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, title, TabHeading, Icon, Text,} from 'native-base';
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
  title:{
    textAlignVertical: "center",
    textAlign: "center",
    color:'rgba(0,0,0,.6)'
  }

})

export default class FarmerTabs extends Component {
  render() {
    return (
    
      <Container>
        <HeaderComponent title="Sell" />
        <Tabs tabBgColor ={{color:'#ffffff'}} tabBarUnderlineStyle	={{backgroundColor:'#6202EE'}} >
          <Tab  backgroundColor={{color:'#ffffff'}} heading={<TabHeading><Icon type="MaterialCommunityIcons" name='playlist-plus' color='rgba(0,0,0,.6)'/><Text style={styles.title} >{"\n"}Catalog</Text></TabHeading>}>
            <FarmerPS />
          </Tab>
          <Tab  style={styles.tab} heading={<TabHeading><Icon type="MaterialCommunityIcons" name='store' color='rgba(0,0,0,.6)'/><Text style={styles.title}>{"\n"}Published</Text></TabHeading>}>
            <FarmerPL />
          </Tab>
          <Tab  style={styles.tab} heading={<TabHeading><Icon type="MaterialCommunityIcons" name='inbox' color='rgba(0,0,0,.6)'/><Text style={styles.title}>{"\n"}Orders</Text></TabHeading>}>
            <FarmerO />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
