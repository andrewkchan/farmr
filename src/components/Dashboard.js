import React, { Component, PropTypes } from "react";
import { View, Text } from "react-native";

import Camera from "../components/Camera";
import Picture from "../components/Picture";

const propTypes = {
    captured: PropTypes.bool.isRequired
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
                <Camera {...this.props} style={{flex:1}} />
            </View>
        );
    }
}

export default Dashboard;
