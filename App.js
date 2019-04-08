import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Styles from './Style';
export default class App extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.resultContainer}></View>
        <View style={Styles.buttonContainer}></View>
      </View>
    );
  }
}


