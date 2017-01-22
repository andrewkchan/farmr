import React, { Component, PropTypes } from "react";
import { View, TouchableHighlight, Text, Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import IconI from "react-native-vector-icons/Ionicons";

const propTypes = {
    navigator: PropTypes.object.isRequired
};

const containerStyle = {
    flexDirection: "row",
    height: 90,
    justifyContent: "space-between"
};

const iconStyle = {
    margin: 20,
    
};

class CameraTop extends Component {
    constructor(props) {
        super(props);
        this.onBackPress = this.onBackPress.bind(this);
    }
    onBackPress(){
        const { navigator } = this.props;
        navigator.replace({
            id: "dashboard"
        });
    }
    render() {
        return (
            <View style={containerStyle}>
                <TouchableHighlight onPress={this.onBackPress} style={{flex: 1}}>
                    <Icon
                        name="angle-left"
                        size={30}
                        style={{...iconStyle, marginLeft: 30}}
                        color="#fff"
                    />
                </TouchableHighlight>
                
                
                <TouchableHighlight style={{flex: 1}}>
                    <Icon
                        name="flash"
                        size={30}
                        style={{...iconStyle, marginLeft: 120, }}
                        color="#fff"
                    />
                </TouchableHighlight>
                
                
            </View>
        );
    }
}

export default CameraTop;
