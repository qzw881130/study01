//import Toast from 'react-native-root-toast';
import {Alert} from 'react-native';

let NetUtil = {
    postJson(url, data, callback){
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data;boundary=6ff46e0b6b5148d984f148b6542e5a5d'
            },
            body:data
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.text();
            })
            .then((responseText) => {
                callback(JSON.parse(responseText));
            })
            .catch(error => {
                //Toast.show('登录失败:' + 'status:' + error.code +',' + error.message);
                Alert.alert('服务器异常:', 'status:' + error.code +',' + error.message);
            }).done();
    },
}
export default NetUtil;