import * as React from 'react';
import { Button, Card, Title, Paragraph, Divider, Text, Icon, StyleSheet, View, Headline } from 'react-native-paper';


const FarmerO = () => (
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
    <Headline style={{paddingLeft:16, fontSize:60}}>Qty uom</Headline>
    <Card.Actions>
      <Button icon="map-marker" color="#757575" uppercase={false}>   Address Name </Button>
    </Card.Actions>
    <Divider inset="true"/>
    <Card.Actions>
      <Button color="#6202EE">Complete</Button>
      <Button color="#6202EE">Contact</Button>
    </Card.Actions>
  </Card>
);
export default FarmerO;