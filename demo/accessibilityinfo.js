import React from "react";
import {View, Text, AccessibilityInfo} from "react-native"

class ScreenReaderStatusExample extends React.Component {
    state = {
        screenReaderEnabled: false,
    };

    componentDidMount() {
        AccessibilityInfo.addEventListener(
            'change',
            this._handleScreenReaderToggled
        );
        AccessibilityInfo.fetch().done((isEnabled) => {
            this.setState({
                screenReaderEnabled: isEnabled,
            });
        });
    }

    componentWillUnmount() {
        AccessibilityInfo.removeEventListener(
            'change',
            this._handleScreenReaderToggled
        );
    }

    _handleScreenReaderToggled = (isEnabled) => {
        this.setState({
            screenReaderEnabled: isEnabled,
        });
    };

    render() {
        return (
            <View style={{top: 50}}>
                <Text>
                    The screen reader is{' '}
                    {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
                </Text>
            </View>
        );
    }
}

export {ScreenReaderStatusExample as default};