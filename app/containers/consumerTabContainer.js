import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';
import { Container, Header, Content, Tab, Tabs, title, TabHeading, Icon, Row} from 'native-base';
import ConsumerF from './customerCont/customerFeed';
import ConsumerC from './customerCont/customerCart';
import ConsumerO from './customerCont/customerOrder';
import HeaderComponent from '../components/header.component';

const styles = StyleSheet.create({
  tabIcon:{
    color : '#757575',
    
  },
  tabUnderline:{
    backgroundColor:'#6202EE',
  },
  tab:{
    backgroundColor: '#ffffff',
    flexDirection: 'row', 
    flex: 1,
    justifyContent: 'center'
  }
})
export default class ConsumerTabs extends Component {
  render() {
    return (
    
      <Container>
        <HeaderComponent style={{shadowColor: 'transparent', elevation:6}} title="Buy" />
        <Tabs activeTabStyle={{color:'#6202EE', flex: 1}} tabContainerStyle={{height:72, elevation:0}} tabBgColor="white" tabBarUnderlineStyle	={styles.tabUnderline}>
          <Tab heading={<TabHeading style={styles.tab}><Icon style={styles.tabIcon} type="MaterialCommunityIcons" name='shopping'/><Text style={{textAlignVertical: "center",textAlign: "center",}} >Feed</Text></TabHeading>}>
            <ConsumerF />
          </Tab>
          <Tab heading={<TabHeading style={styles.tab}><Icon style={styles.tabIcon} type="MaterialCommunityIcons" name='cart'/><Text>Cart</Text></TabHeading>}>
            <ConsumerC />
          </Tab>
          <Tab heading={<TabHeading style={styles.tab}><Icon style={styles.tabIcon} type="MaterialIcons" name='local-shipping'/><Text>Orders</Text></TabHeading>}>
            <ConsumerO />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
