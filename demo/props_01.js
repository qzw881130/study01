import React, {Component} from "react";
import {Image, StyleSheet} from "react-native";

export default class Bananas extends Component{
    render(){
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        };
        return (
            <Image source={pic} style={style.image}/>
        );
    }
}

var style = StyleSheet.create({
    image:{
        width: 193, height: 110, marginTop: 30, marginLeft: 20
    }
})