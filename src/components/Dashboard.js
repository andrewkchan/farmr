import React, { Component, PropTypes } from "react";
import { View, Text } from "react-native";

import Camera from "../components/Camera";
import Picture from "../components/Picture";

const propTypes = {
    captured: PropTypes.bool.isRequired
};

const imageStyle = {
    width: 250,
    height: 250,
    marginBottom: 350
};

class Dashboard extends Component {
    render() {
        const { captured } = this.props;

        if (captured) {
            return (
                <View style={{flex: 1}}>
                    <Picture {...this.props} style={{flex: 1}} />
                </View>
            );
        }

        return (
            <View style={{flex: 1}}>
                <View style={{alignSelf: "center", margin: 15}}>
                    <Text>
                    You have no crops in your circle. :(
                    </Text>
                </View>
                <Image
                    source={require("../images/dirticon.png")}
                    style={imageStyle}
                    resizeMode="contain"
                />
            </View>
        );
    }
}

export default Dashboard;
