/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import ListView from './ios/listView'
import DetailView from './shared/detailView'

import {Scene, Router} from 'react-native-router-flux'



class newProject extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="list" component={ListView} initial={true} title="My events"/>
          <Scene key="detailEvent" component={DetailView}/>
        </Scene>
      </Router>
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

AppRegistry.registerComponent('newProject', () => newProject);
