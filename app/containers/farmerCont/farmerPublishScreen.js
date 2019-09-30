

import React, { Component } from 'react';
import { View, Text, ListView, FlatList, StyleSheet} from 'react-native';
import { Button, Card, BottomNavigation, Title, Paragraph, ActivityIndicator, Modal } from 'react-native-paper';
import globalStyle from '../../global.style';
import HeaderComponent from '../../components/header.component';
import Currency from '../../components/currency.component';
import ApiHelper from '../../utils/api.helper';
import colors from '../../config/theme';
//import PublisherModal from './farmerPublishDialog'
import {ModalComp} from '../example/ModelExample';

const styles = StyleSheet.create ({
    item: {
       //flex: '3',
       width: '50%',
       height: 'auto',
       flexDirection: 'column',
       justifyContent: 'space-around',
       alignItems: 'stretch',
       
       paddingTop: '4%',
       paddingLeft: '2%',
       paddingRight: '2%',
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
        error:null,
        display: false
    };

    _handleLoadMore = () => {
    }

    triggerModal=()=>{
        this.setState({showModal: true})
    }
    closeModal=()=>{
        this.setState({showModal: false})
    }
    constructor(props) {
        super(props);
        this.state = {
          dataSource: null,
          isLoading: true,
          list:[],
          showModal: false
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
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    render() {
        return (
            <View style={globalStyle.container}>
                <Button onPress={()=>(this.triggerModal())}>modal</Button>
                <ModalComp modalVisible={this.state.showModal} close={()=>{this.closeModal()}}/>
                <FlatList 
                numColumns={2}
                //contentContainerStyle={{ paddingBottom: 55}}
                data={this.state.list}
                
                renderItem={
                    ({item}) => ( <View key = {(item.id)} style = {styles.item}>
                        
                        <Card onPress={()=>(this.triggerModal())}>
                            <Card.Cover source={{uri: item.image}}/>
                            <Card.Title title={item.hindi_name} subtitle={item.english_name} />
                        </Card>        
                    </View>)
                }/>

            </View>
            )
                    
    }
}

