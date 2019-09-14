
/*
Steps
- Choose Item Type *Both Hindi and english?*
- Choose Quantity
- Choose Price / lb
- Preview listing
- Confirmation (failure / success) Snackbar? 
- return to lisitngs / orders / Published List
*/


import React, { Component } from 'react';
import { View, Text, ListView, FlatList, StyleSheet} from 'react-native';
import { Button, Card, BottomNavigation, Title, Paragraph, ActivityIndicator } from 'react-native-paper';
import globalStyle from '../../global.style';
import HeaderComponent from '../../components/header.component';
import Currency from '../../components/currency.component';
import ApiHelper from '../../utils/api.helper';
import colors from '../../config/theme';


const styles = StyleSheet.create ({
    item: {
       //flex: '3',
       width: '50%',
       height: 'auto',
       flexDirection: 'column',
       justifyContent: 'space-around',
       alignItems: 'stretch',
       paddingBottom: '1%',
       paddingLeft: '1%',
       paddingRight: '1%',
       borderColor: '#0477BF',
       
       backgroundColor:'#0477BF',
    },
    image: {


    }
 })

export default class FarmerPS extends Component {
    state = {
        data: [],
        page: 1,
        loading: true,
        loadingMore: false,
        error:null
  
    };

    _handleLoadMore = () => {

    }

    
    
    constructor(props) {
        super(props);
        this.state = {
          dataSource: null,
          isLoading: true,
          list:[]
        };
        this.getCartList();
    }

    static navigationOptions = {
    };

    getCartList = () =>{
            ApiHelper.getCropList().then(res => {
                this.setState({
                    list: res.data.docs
                });
            })
    }
    
    render() {
        return (
            <View style={globalStyle.container}>
                
                <FlatList 
                numColumns={2}
                //contentContainerStyle={{ paddingBottom: 55}}
                data={this.state.list}
                renderItem={
                    ({item}) => ( <View key = {(item.id)} style = {styles.item}>
                        <Card>
                            <Card.Title title={item.hindi_name} subtitle={item.english_name} />
                            <Card.Cover source={{uri: item.image}}/>
                            {/* <Card.Actions>
                            </Card.Actions> */}
                        </Card>
                        
                        
                    </View>)
                }/>
            
                
            </View>
            )
                    
    }
}

