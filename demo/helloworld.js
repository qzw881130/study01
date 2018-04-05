import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';

export default class Helloworld extends Component {
    render() {
        return (
            <Text style={{margin: 50, color: 'red', fontSize: 50}}>Hello world!</Text>
        );
    }
}