/*Simple List
    -Only Title, Quantity listed, Listed Price
*/

import * as React from "react";
import { Button, Card, Title, Paragraph, Divider } from "react-native-paper";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ProgressBarAndroid,
  ProgressViewIOS
} from "react-native";


export default FarmerPL = () => (
  <Card>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Title
      title="Hindi Name"
      subtitle="English Name"
      right={props => (
        <Text style={{ marginRight: 25 }}>Price per uom</Text>
      )}
    />

      <Text style={{ fontSize: 10, fontWeight: "bold", paddingLeft:16 }}>ORDERS</Text>
      <Text style={{ fontSize: 16, paddingLeft:16 }}>Order Count</Text>

      <Divider />
      <Card.Actions>
        <Text 
          style={{ 
            fontSize: 10, 
            flex: 1, 
            paddingTop: "2%" }}
        >
          TOTAL INV
        </Text>
        <Text
          style={{
            fontSize: 10,
            flex: 1,
            paddingTop: "2%",
            textAlign: "right",
            alignSelf: "stretch"
          }}
        >
          REMAINING INV
        </Text>
      </Card.Actions>
      {Platform.OS === "android" ? (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          progress={0.5}
          indeterminate={false}
          color="#6202EE"
        />
      ) : (
        <ProgressViewIOS progress={0.5} progressTintColor="#6202EE" />
      )}
    
    <Card.Actions>
      <Button color="#6202EE">Relist</Button>
      <Button color="#6202EE">End </Button>
    </Card.Actions>
  </Card>
);
