import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './app/store';
import AppContainer from './app/global.navigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <StoreProvider store={store}>
          <PaperProvider>
            <AppContainer/>
          </PaperProvider>
        </StoreProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
