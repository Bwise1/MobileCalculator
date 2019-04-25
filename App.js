import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import Styles from './Style';
import Button from './Buttons';

//buttons that will be displayed on the screen
const inputButtons = [
  ['Del', 'Clear'],
  ['9', '8', '7', '+'],
  ['6', '5', '4', '-'],
  ['3', '2', '1', '/'],
  ['0', '.', '=', '*']
];


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.initialState = {
      inputValue: '0',
      selectedSymbol: null,
      numDots: 0,
      firstValue: '',
      secondValue: '',
      nextValue: false,
 
    }
    this.state = this.initialState
  }
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.resultContainer}>
          <Text style={Styles.resultText}>{this.state.inputValue}</Text>
        </View>
        <View style={Styles.buttonContainer}>
          {this._renderButtons()}
        </View>

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
            highlight={this.state.selectedSymbol === input}
            onPress={this._onInputButtonPressed.bind(this, input)}
            key={r + "-" + i} />
        );
      }
      views.push(<View style={Styles.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }

  _onInputButtonPressed = (input) => {
    const { inputValue, selectedSymbol, numDots, firstValue, secondValue, nextValue } = this.state;
    switch (input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({
          inputValue: (inputValue === '0') ? input : inputValue + input
        })
        if (!nextValue) {
          this.setState({
            firstValue: firstValue + input
          })
        } else {
          this.setState({
            secondValue: secondValue + input
          })
        }
        break;

      case '+':
      case '-':
      case '/':
      case '*':
        if (selectedSymbol == null) {
          this.setState({
            nextValue: true,
            numDots: 0,
            selectedSymbol: input,
            inputValue: (selectedSymbol !== null ? inputValue.substr(0, inputValue.length - 1) : inputValue) + input
          })
        }

        break;
      case '.':
        let dot = inputValue.toString().slice(-1)
        if (numDots == 0) {
          this.setState({
            inputValue: dot != '.' ? inputValue + input : inputValue,
            numDots: numDots + 1
          })
          if (!nextValue) {
            this.setState({
              firstValue: firstValue + input
            })
          } else {
            this.setState({
              secondValue: secondValue + input
            })
          }
        } else {
          return
        }


        break;
      case 'Clear':
        this.setState(this.initialState);
        break
      case 'Del':
        let tempInputValue = inputValue.toString();
        let deletedString = tempInputValue.slice(0, tempInputValue.length - 1);
        let stringLength = tempInputValue.length;
        this.setState({
          inputValue: stringLength == 1 ? '0' : deletedString,
          firstValue: stringLength == 1 ? '0' : deletedString,
        })
        break;
      case '=':
        let result = eval(firstValue + selectedSymbol + secondValue);
        this.setState({
          inputValue: result % 1 === 0 ? result : result.toFixed(2),
          firstValue: result % 1 === 0 ? result : result.toFixed(2),
          secondValue: '',
          selectedSymbol: null,
          nextValue: false
        })



        break;
    }

  }
}

