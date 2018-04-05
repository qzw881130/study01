import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

const apiUrl = 'http://test.qiansx.com/server/list.php';

export default class SectionListBasics extends Component {
    constructor(props){
        super(props);

        this.state = {list: []};
    }
    componentDidMount(){
        this.loadData();
    }
    _extraUniqueKey(item ,index){
        return "index"+index+item;
    }
    loadData(){
        fetch(apiUrl + '?' + (new Date()), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: ''
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)

            var data = this.state.list;
            data.push(...responseJson);
            console.log(data)
            this.setState({
                list: data
            })
            // console.log(this.state.list)
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections= {this.state.list}
                    keyExtractor = {this._extraUniqueKey}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
                <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={()=>this.loadData()}>
                    <Text style={styles.buttonText}>Flush</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    buttonView: {
        position: 'absolute',
        top: 150,
        right: 25,
    },
    button:{
        height: 40,
        width: 100,
        borderRadius: 5,
        backgroundColor: 'green',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})