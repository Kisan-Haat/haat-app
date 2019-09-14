import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const FarmerO = () => (
  <Card>
    
    <Card.Content>
      <Title>Place Holder</Title>
      <Paragraph>Listed item english</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Repeat</Button>
      <Button>End</Button>
    </Card.Actions>
  </Card>
);

export default FarmerO;