import React, { Component } from 'react';
import {Dimensions, View} from 'react-native'
import { Container, Header, Content, Tab, Tabs, title, TabHeading, Icon, Text, Label,} from 'native-base';
import {StyleSheet} from 'react-native'
import FarmerPS from './farmerCont/farmerCatalog';
import FarmerPL from './farmerCont/farmerPublishedList';
import FarmerO from './farmerCont/farmerOrders';
import HeaderComponent from '../components/header.component';

const styles = StyleSheet.create ({
  tabIcon:{
    color : '#757575',  
  },
  tab: {
    backgroundColor: '#ffffff',
    color: '#000000'
  },
  atab: {
    color: '#6202EE'
  },
  tabs:{
    //tabBarUnderlineStyle: 'rgba(0, 0, 0, 0.12)',

  },
  
  tabUnderline:{
    backgroundColor:'#6202EE'
  },
  container:{
    margin:20
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
        <Tabs
          tabContainerStyle={{ height: 72, elevation: 0 }}
          tabBarUnderlineStyle={styles.tabUnderline}
        >
          <Tab
            heading={
              <TabHeading activeTabStyle={styles.atab} style={styles.tab}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="playlist-plus"
                  style={styles.tabIcon}
                />
                <Label>Catalog</Label>
              </TabHeading>
            }
          >
           <View> 
            <FarmerPS />
           </View> 
            
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.tab}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="store"
                  style={styles.tabIcon}
                />
                <Text style={styles.title}>Published</Text>
              </TabHeading>
            }
          >
            <View style={styles.container}>
              <FarmerPL />
            </View>
           
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.tab}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="inbox"
                  style={styles.tabIcon}
                />
                <Text style={styles.title}>Orders</Text>
              </TabHeading>
            }
          >
            <View style={styles.container}>
            <FarmerO />
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
