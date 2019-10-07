/*Simple List
    -Only Title, Quantity listed, Listed Price
*/

import * as React from 'react';
import { Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { Platform, StyleSheet, View, Text, TouchableOpacity, ProgressBarAndroid, ProgressViewIOS } from 'react-native';
import { Subtitle } from 'native-base';



export default FarmerPL = () => (
  <Card 
  
    style={{
    elevation : 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: '4%',
    
}}>
    
    
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>Hindi Name</Title>
      <Paragraph>English Name</Paragraph>
      <Paragraph style={{fontSize: 1}}>     </Paragraph>

      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Orders</Text>
      <Text style={{fontSize: 20}}>Order Count</Text>
      
      <Divider />
      <Card.Actions
      style={{}}>
      <Text style={{fontSize: 15, flex : 1, paddingTop: '2%'}}>TOTAL INV</Text>
      <Text style={{fontSize: 15, flex : 1, paddingTop: '2%' , textAlign: 'right', alignSelf: 'stretch'}}>REMAINING INV</Text>
      </Card.Actions>
      {
            ( Platform.OS === 'android'
           )
            ?
              ( <ProgressBarAndroid styleAttr = "Horizontal" progress = { .5 } indeterminate = { false } /> )
            :
              ( <ProgressViewIOS progress = { .5 } /> )
        }
    </Card.Content>
    <Card.Actions>
    <Button>Relist</Button>
      
    <Button>End</Button>
    </Card.Actions>
  </Card>
);