import React, { Component } from 'react';
import { View, Text } from 'react-native';

//importing style component
import Styles from './Style';

export default class Button extends Component{

    render() {
        return (
            <View style={Styles.button}>
                <Text style={Styles.buttonText}> {this.props.value}</Text>
            </View>
        )
    }
}