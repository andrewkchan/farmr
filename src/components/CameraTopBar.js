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
    render() {
        return (
            <View style={containerStyle}>
                <TouchableHighlight style={{flex: 1}}>
                    <Icon
                        name="angle-left"
                        size={30}
                        style={{...iconStyle, marginLeft: 20}}
                        color="#fff"
                    />
                </TouchableHighlight>
                
                
                <TouchableHighlight style={{flex: 1}}>
                    <Icon
                        name="flash"
                        size={30}
                        style={{...iconStyle, marginRight: 20, {transform: translateX(20)}}}
                        color="#fff"
                    />
                </TouchableHighlight>
                
                
            </View>
        );
    }
}

export default CameraTop;
