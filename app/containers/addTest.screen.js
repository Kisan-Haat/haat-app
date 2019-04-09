/*
The purpose of this file to show how actions to be consumed.
Note: This is a sample container file.
Please remove it when developing a new app.
*/
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {addTest} from "../actions/root.actions";

class AddTest extends Component {

    state = {
        text: ''
    }

    addTest = (text) => {
        this.props.dispatch(addTest(text));
        this.setState({text: ''})
    }

    render() {
        return (
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                    placeholder="Eg. Add test"
                    style={{borderWidth: 1, flex: 2, height: 50, borderColor: '#f2f1e1', padding: 5, backgroundColor: '#e2e1e1'}}
                />
                <TouchableOpacity style={{flex: 1}}
                                  onPress={()=>this.addTest(this.state.text)}
                >
                    <View style={{ padding: 5, height: 50, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Add</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(AddTest);
