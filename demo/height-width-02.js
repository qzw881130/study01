import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component{
    render(){
        return (
            // 试试去掉父View中的`flex: 1`。
            // 则父View不再具有尺寸，因此子组件也无法再撑开。
            // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
            <View style={{flex: 1, flexDirection:'row',}}>
                <View style={{flex: 1, height: 100, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, height: 200, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, height: 300, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};