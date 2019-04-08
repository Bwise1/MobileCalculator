import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import Styles from './Style';

import Button from './Buttons';

//buttons that will be displayed on the screen
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];


export default class App extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.resultContainer}></View>
        <View style={Styles.buttonContainer}>{this._renderButtons()}</View>
      </View>
    );
  }
  _renderButtons(){
    let views = [];

    for(var r=0; r<inputButtons.length; r++){
      let row = inputButtons[r];

      let inputRow =[];
      for (var i=0; i < row.length; i++ ){
        let input = row[i];

        inputRow.push(
          <Button value={input} key={r + "-" +i }/>
        );
      }
      views.push(<View style={Styles.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }
}


