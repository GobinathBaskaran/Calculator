/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/config/storeConfig';
import RootNavigator from './app/config/navigator';
import { writeFile } from './app/service/fileService';
import defaultData from '../config/defaultData.json';

export default class App extends Component {
  componentDidMount() {
    writeFile(defaultData);
  }
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}