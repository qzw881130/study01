import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component{
    render(){
        return (
            <Text>Hello {this.props.name}</Text>

        );
    }
}

export default class LotsOfGreeting extends Component{
    render(){
        return (
            <View style={{alignItems: 'flex-start', marginTop:30}}>
                <Greeting name="qzw"/>
                <Greeting name="lfj"/>
                <Greeting name="tan"/>
            </View>
        );
    }
}