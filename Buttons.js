import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

//importing style component
import Styles from './Style';

export default class Button extends Component{

    render() {
        return (
            <TouchableHighlight style={[Styles.button, this.props.highlight ? Styles.inputButtonHighlighted : null]} underlayColor = "red" onPress={this.props.onPress}>
                <Text style={Styles.buttonText}> {this.props.value}</Text>
            </TouchableHighlight>   
        )
    }
}