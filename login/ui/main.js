//https://blog.csdn.net/u012915455/article/details/52594091
import React, { Component } from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import EditView from '../lib/EditView';
import LoginButton from '../lib/LoginButton';
import LoginSuccess from '../ui/LoginSuccess';
import NetUitl from '../lib/NetUtil';
//import Toast from 'react-native-root-toast';

export default class LoginActivity extends Component {
    constructor(props) {
        super(props);
        this.userName = "";
        this.password = "";
    }

    render() {
        return (

            <View style={LoginStyles.loginview}>
                <View   style={{flexDirection: 'row',height:100,marginTop:1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',}}>
                    <Image source={require('../image/login_logo.png')}/>
                </View>
                <View style={{marginTop:80}}>
                    <EditView underlineColorAndroid="transparent" autoCapitalize="none" name='输入用户名/注册手机号' onChangeText={(text) => {
                        this.userName = text;
                    }}/>
                    <EditView name='输入密码' password={true} onChangeText={(text) => {
                        this.password = text;
                    }}/>
                    <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
                    <Text style={{color:"#4A90E2",textAlign:'center',marginTop:10}} >忘记密码？</Text>
                </View>
            </View>
        )
    }


    onPressCallback = () => {
        let formData = new FormData();
        formData.append("loginName",this.userName);
        formData.append("pwd",this.password);
        console.log(formData);
        let url = "http://test.qiansx.com/server/login.php";
        NetUitl.postJson(url,formData,(resp) => {
            if(resp.status == '1'){
                this.onLoginSuccess();
            } else {
                //Toast.show('登录失败:' + resp.msg);
                Alert.alert('登录失败', resp.msg);
            }
        })


    };

    //跳转到第二个页面去
    onLoginSuccess(){
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name : 'LoginSuccess',
                component : LoginSuccess,
            });
        }
    }

}

class loginLineView extends Component {
    render() {
        return (
            <Text >
                没有帐号
            </Text>
        );
    }
}

const LoginStyles = StyleSheet.create({
    loginview: {
        flex: 1,
        padding: 30,
        backgroundColor: '#ffffff',
    },
});