import * as React from 'react';
import { Button, Card, Title, Paragraph, Divider, Text, Icon, StyleSheet, View } from 'react-native-paper';

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

    <Card.Content>
      <Button icon="account-box" color="#757575" label="Customer Name" />
      <Text>Customer Name</Text>
      <Button icon="phone" color="#757575"/>
      <Text>Contact Number</Text>
    </Card.Content>

    <Divider style={{ alignContent: "flex-end" }} />
    <Card.Actions>
      <Button color="#6202EE">Complete</Button>
      <Button color="#6202EE">Contact</Button>
    </Card.Actions>
  </Card>
);
export default FarmerO;