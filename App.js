import React, { Component } from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './app/store';
import AppContainer from './app/global.navigation';
import { SafeAreaView } from 'react-native';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffffff'
  }
}
export default class App extends Component {
  render() {
    return (
         <StoreProvider store={store}>
          <PaperProvider theme={theme}>
            <AppContainer />
          </PaperProvider>
        </StoreProvider>
    );
  }
}
