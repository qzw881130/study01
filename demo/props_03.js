import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {showText: true};
        setInterval(()=>{
            this.setState(previousState => { showText: !previousState.showText})
        }, 1000);
    }
    render(){
        let text = this.state.showText ? this.props.text : '';
        return (
            <Text>{text}</Text>
        );
    }
}

export default class BlinkApp extends Component{
    render(){
        return (
            <View style={{marginTop:40, alignItems: 'center'}}w>
                <Blink text={'aaaaaaaaaaaaaaa'}/>
                <Blink text={'bbbbbbbbbbbbbbb'}/>
                <Blink text={'cccccccccccccccc'}/>
            </View>
        );
    }
}
