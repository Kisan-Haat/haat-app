import * as React from "react";
import { Button, Card, Title, Paragraph } from "react-native-paper";

export default ConsumerO = () => (
  <Card>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Content>
      <Title>Listed Item</Title>
      <Paragraph>Listed item english</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button icon="account-box">Press me</Button>
      <Button>Repeat</Button>
      <Button>End</Button>
    </Card.Actions>
  </Card>
);
