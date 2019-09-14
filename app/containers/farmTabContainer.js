import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, title } from 'native-base';
import FarmerPS from './farmerCont/farmerPublishScreen';
import FarmerPL from './farmerCont/farmerPublishedList';
import FarmerO from './farmerCont/farmerOrders';
import HeaderComponent from '../components/header.component';
export default class fTC extends Component {
  render() {
    return (
    
      <Container>
        <HeaderComponent title="Haat Market" />
        <Tabs
        tabStyle={{ backgroundColor: "#5078F2" }}>
          <Tab heading="Catalog">
            <FarmerPS />
          </Tab>
          <Tab heading="Published">
            <FarmerPL />
          </Tab>
          <Tab heading="Orders">
            <FarmerO />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
