import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, title, TabHeading, Icon, Text} from 'native-base';
import FarmerPS from './farmerCont/farmerPublishScreen';
import FarmerPL from './farmerCont/farmerPublishedList';
import FarmerO from './farmerCont/farmerOrders';
import HeaderComponent from '../components/header.component';
export default class FarmerTabs extends Component {
  render() {
    return (
    
      <Container>
        <HeaderComponent title="Sell" />
        <Tabs tabBgColor="white">
          <Tab heading={<TabHeading style={{backgroundColor: '#0477BF'}}><Icon type="MaterialCommunityIcons" name='playlist-plus'/><Text style={{textAlignVertical: "center",textAlign: "center",}} >{"\n"}Catalog</Text></TabHeading>}>
            <FarmerPS />
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#0477BF'}}><Icon type="MaterialCommunityIcons" name='store'/><Text>{"\n"}Published</Text></TabHeading>}>
            <FarmerPL />
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#0477BF'}}><Icon type="MaterialCommunityIcons" name='inbox'/><Text>{"\n"}Orders</Text></TabHeading>}>
            <FarmerO />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
