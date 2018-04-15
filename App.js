import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from "react-redux";
import { ThemeProvider } from 'react-native-material-ui';
import store from "./store";
import { MasterView } from './src/shared';
import Calculator from './src/components/Calculator';

import { UITheme } from './src/shared/AppTheme';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={UITheme}>
          <MasterView>
            <StatusBar backgroundColor='#6b97fe' />
            <Calculator />
          </MasterView>
        </ThemeProvider>
      </Provider>
    );
  }
}
