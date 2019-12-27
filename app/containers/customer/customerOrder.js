import * as React from "react";
import { Button, Card, Title, Paragraph, Text, Divider, Headline } from "react-native-paper";

export default Orders = () => (
  <Card>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Title
      title="Hindi Name"
      subtitle="English Name"
      right={props => <Text style={{ marginRight: 25 }}>Cost per uom</Text>}
    />

    <Card.Actions>
      <Button
        icon="account-box"
        color="#757575"
        label="Customer Name"
        uppercase={false}
        labelStyle={{ color: "rgba(0, 0, 0, 0.87)" }}
      >
        Farmer Name
      </Button>
    </Card.Actions>
    <Divider inset="true" />
    <Card.Content style={innerHeight=60} >
      <Headline style={{fontSize:60, paddingTop:30}}>
        Qty uom
      </Headline>
    </Card.Content>
    <Card.Actions>
      <Button color="#6202EE">Recieve</Button>
      <Button color="#6202EE">Reorder</Button>
    </Card.Actions>
  </Card>
);
