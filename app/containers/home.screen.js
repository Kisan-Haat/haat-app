import React, { Component } from 'react';
import { View, Text, ListView, FlatList, StyleSheet} from 'react-native';
import { Button, Card, BottomNavigation, Title, Paragraph, ActivityIndicator } from 'react-native-paper';
import globalStyle from '../global.style';
import HeaderComponent from '../components/header.component';
import I18n from '../utils/I18n';
import Currency from '../components/currency.component';
import ApiHelper from '../utils/api.helper';
import colors from '../config/theme';

const styles = StyleSheet.create ({
    item: {
       //flex: '3',
       flexDirection: 'column',
       justifyContent: 'space-between',
       alignItems: 'stretch',
       paddingBottom: '2%',
       borderColor: '#0477BF',
       borderWidth: 3,
       backgroundColor:'#0477BF',
    },
    image: {


    }
 })
export default class HomeScreen extends Component {
    
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
                <HeaderComponent title="Haat Market" />
                
                {/* <Text>{I18n.t("welcome")}</Text>
                <Currency value={1000} currency_code="EN" /> */}
                <FlatList 
                
                contentContainerStyle={{ paddingBottom: 55}}

                //keyExtractor={(item, ) => item.id }
                data={this.state.list}
                renderItem={
                    ({item}) => ( <View key = {(item.id)} style = {styles.item}>
                        <Card>
                            <Card.Title title={item.hindi_name} subtitle={item.english_name} />
                            <Card.Cover source={{uri: item.image}}/>
                            <Card.Actions>
                                <Button>
                                    Add to cart
                                </Button>
                            </Card.Actions>
                        </Card>
                        
                        
                    </View>)
                }/>
                </View>
            )
                    
                
                /* <Card>

                    var productCatalog = {
                    food: "food",
                    description: "description",
                    price: price,
                    uri: uri,
                    };

                </Card> */

            /* if (this.state.isLoading) {
                return (
                    <View style={styles.container}>
                        <ActivityIndicator size="large"/>
                    </View>
                );
            } else {
                return (

                )

            } */
            // </View><Card.Content>
            //             <Title>Food Name</Title>
            //             <Paragraph>Specific Info</Paragraph>
            //         </Card.Content>
            //         <Card.Cover source={{ uri: 'https://static01.nyt.com/images/2018/02/21/dining/00RICEGUIDE8/00RICEGUIDE8-articleLarge.jpg' }} />
            //         <Card.Actions>
            //             <Button>-</Button>


            //             <Button>+</Button>
            //         </Card.Actions>
            //     </Card>
            // </View>


        
    }
}

/**
 * 
 * 
 * 
 */

