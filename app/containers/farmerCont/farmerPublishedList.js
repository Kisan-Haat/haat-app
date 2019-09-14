/*Simple List
    -Only Title, Quantity listed, Listed Price
*/

import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default FarmerPL = () => (
  <Card>
    
    <Card.Content>
      <Title>Listed Item</Title>
      <Paragraph>Listed item english</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Repeat</Button>
      <Button>End</Button>
    </Card.Actions>
  </Card>
);