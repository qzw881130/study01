import React, { Component, PropTypes } from 'react';
import {TouchableHighlight, Text, Alert, StyleSheet, View} from "react-native"

export default class MyButton extends Component {
    _onPressButton() {
        Alert.alert("You tapped the button!")
        console.log("You tapped the button!");
    }

    render() {
        return (
            <View style={Styles.container}>
            <TouchableHighlight onPress={this._onPressButton} style={Styles.button}>
                <Text style={Styles.buttonText}>Button</Text>
            </TouchableHighlight>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: 'green',
        borderRadius: 10,
        top: 30,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center'
    }
})