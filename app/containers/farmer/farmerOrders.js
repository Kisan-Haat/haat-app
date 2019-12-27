import * as React from 'react';
import { Button, Card, Title, Paragraph, Divider, Text, Icon, StyleSheet, View, Headline } from 'react-native-paper';


export default Orders = () => (
  <Card>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Title
      title="Hindi Name"
      subtitle="English Name"
      right={props => (
        <Text style={{ marginRight: 25 }}>Order Total</Text>
      )}
    />

    <Card.Actions>
      <Button icon="account-box" color="#757575" uppercase={false}>   Contact Name</Button>
    </Card.Actions>
    <Divider inset="true"/>
    <Card.Actions>
      <Button icon="phone" color="#757575" uppercase={false}>   Contact Number</Button>
    </Card.Actions>
    <Headline style={{paddingLeft:16, fontSize:60, paddingTop:30}}>Qty uom</Headline>
    
    <Divider inset="true"/>
    <Card.Actions>
      <Button color="#6202EE">Complete</Button>
      <Button color="#6202EE">Contact</Button>
    </Card.Actions>
  </Card>
);