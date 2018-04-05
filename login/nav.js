import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Main from './ui/main';
export default class nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let defaultName = 'Main';
        let defaultComponent = Main;
        return (
            <Navigator
                initialRoute = {{name : defaultName , component: defaultComponent}}
                configureScene = {(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route,navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator = {navigator} />
                }}
            />
        );
    }

};