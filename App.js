import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import Styles from './Style';
import Button from './Buttons';

//buttons that will be displayed on the screen
const inputButtons = [
  [9, 8, 7, '+'],
  [6, 5, 4, '-'],
  [3, 2, 1, '/'],  
  [0, '.', '=', '*']
];


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    }
  }
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.resultContainer}>
          <Text style={Styles.resultText}>{this.state.inputValue}</Text>
        </View>
        <View style={Styles.buttonContainer}>{this._renderButtons()}</View>
      </View>
    );
  }
  _renderButtons() {
    let views = [];

    for (var r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];

      let inputRow = [];
      for (var i = 0; i < row.length; i++) {
        let input = row[i];

        inputRow.push(
          <Button value={input}
            highlight={this.state.selectedSymbol ===input}
            onPress={this._onInputButtonPressed.bind(this, input)}
            key={r + "-" + i} />
        );
      }
      views.push(<View style={Styles.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }

  _onInputButtonPressed(input) {
    switch(typeof input){
      case 'number':
        return this._numberInput(input)
      case 'string':
        return this._stringInput(input)
    }
  }

  _stringInput(str){
    switch(str){
      case '+':
      case '-':
      case '/':
      case '*':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        });
        break;
        case '=':
          let symbol = this.state.selectedSymbol,
            inputValue = this.state.inputValue,
            previousInputValue =this.state.previousInputValue;

            if(!symbol){
              return;
            }

            this.setState({
              previousInputValue: 0,
              inputValue: eval(previousInputValue + symbol + inputValue),
              selectedSymbol: null
            });
            break;
    }
  }

  _numberInput(num){
    let inputValue=(this.state.inputValue * 10)+num;

    this.setState({
      inputValue: inputValue
    })
  }
}


