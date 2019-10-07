import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, title, TabHeading, Icon, Text} from 'native-base';
import ConsumerF from './customerCont/customerFeed';
import ConsumerC from './customerCont/customerCart';
import ConsumerO from './customerCont/customerOrder';
import HeaderComponent from '../components/header.component';
export default class ConsumerTabs extends Component {
  render() {
    return (
    
      <Container>
        <HeaderComponent title="Buy" />
        <Tabs tabBgColor="white">
          <Tab heading={<TabHeading style={{backgroundColor: '#ffffff'}}><Icon type="MaterialCommunityIcons" name='shopping'/><Text style={{textAlignVertical: "center",textAlign: "center",}} >{"\n"}Feed</Text></TabHeading>}>
            <ConsumerF />
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#ffffff'}}><Icon type="MaterialCommunityIcons" name='cart'/><Text>{"\n"}Cart</Text></TabHeading>}>
            <ConsumerC />
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#ffffff'}}><Icon type="MaterialIcons" name='local-shipping'/><Text>{"\n"}Orders</Text></TabHeading>}>
            <ConsumerO />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
