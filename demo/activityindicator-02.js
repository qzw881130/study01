import React from "react"
import {
    ActivityIndicator, View, Text, StyleSheet, Button, DrawerLayoutAndroid,
    Platform,
    TouchableOpacity
} from "react-native";
import CheckBox from 'react-native-checkbox';
import Communications from 'react-native-communications';


export default class Activityindicator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEnable: true,
            size: 'small'
        };
    }
    componentDidMount(){
        this.change();
    }
    change = () => {
        console.log('hello');
        setTimeout(()=>{
            this.setState({
                isEnable: true,
            });
            this.change();
        }, 2000);
    }
    render(){
        console.log(this.state)
        var Darwer = (
             (Platform.OS === 'android' ?
                <DrawerLayoutAndroid
                    //宽度
                    drawerWidth={300}
                    //从左侧出
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    //侧滑View视图
                    renderNavigationView={this.navigationView}
                    //打开是调用
                    onDrawerOpen={()=> this.onDrawerOpen()}
                    //关闭时调用
                    onDrawerClose={()=> this.onDrawerClose()}
                >
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text
                            style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                    </View>

                </DrawerLayoutAndroid>
            : null)
        );
        return (
            <View style={Styles.container}>
                <View style={Styles.item}>
                    <ActivityIndicator style={ {backgroundColor: 'yellow'}}
                        animating={this.state.isEnable}
                        size={this.state.size}
                        color="red"
                    />
                </View>
                <View style={Styles.item}>
                    <Button
                        onPress={() => console.log(1)}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={Styles.item}>
                    <CheckBox
                        label='Label'
                        checked={true}
                        onChange={(checked) => console.log('I am checked', checked)}
                    />
                </View>
                <View style={Styles.item}>
                    {Darwer}
                </View>
                <View style={[Styles.item, {flex: 3}]}>
                    <TouchableOpacity style={{height:20,marginTop:20}}
                                      onPress={()=>{
                                          Communications.phonecall('10086', false);

                                      }}>
                        <Text>调用系统打电话功能</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:20,marginTop:20}}
                                     onPress={()=>{

                                         Communications.text('10086','要发送的内容');
                                         Communications.textWithoutEncoding('10086','要发送的内容encoding');//这种方法需要将内容encoding



                                     }}>
                        <Text>调用系统发短信功能</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:20,marginTop:20}}
                                     onPress={()=>{
                                         Communications.email(['emailAddress1@qq.com'],null,null,'My Subject','My body text')
                                     }}>
                        <Text>调用系统发邮件功能</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:20,marginTop:20}}
                                 onPress={()=>{
                                     Communications.web('https://github.com/facebook/react-native')
                                 }}>
                        <Text>调用系统打开网页功能</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    navigationView() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!ssss
                </Text>
            </View>
        )
    }

    onDrawerOpen() {
        console.log('open')
    }
    onDrawerClose() {
        console.log('close')
    }
}
var Styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    item:{
        flex: 1,
        borderWidth:1,
        justifyContent: 'center',
    }

})
