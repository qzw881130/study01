// App.js

import NavigationService from './NavigationService';
import {View, Text} from "react-native"

class HomeScreen extends React.component{
    render(){
        return (
            <View>
            <Text>asdfa</Text>
            </View>
        );
    }
}

const TopLevelNavigator = StackNavigator({
    Home: {screen: HomeScreen}
})

export default class App extends React.Component {
    // ...

    render(): {
        return (
        <TopLevelNavigator
            ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        />
        );
    }
}