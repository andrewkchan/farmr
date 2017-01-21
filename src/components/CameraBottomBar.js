import React, { Component, PropTypes } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconI from "react-native-vector-icons/Ionicons";

import { capture } from "../actions/index";

const propTypes = {
    dispatch: PropTypes.func.isRequired
};

const containerStyle = {
    flexDirection: "row",
    height: 90,
    justifyContent: "space-between"
};

const snapsButtonWrapperStyle = {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    //color: "#000",
    padding: 10,
    margin: 40
};
const snapsButtonContainerStyle = {
    width: 30,
    height: 30,
    margin: 30,
    marginLeft: 0,
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#fff"
};
const captureIconStyle = {
    margin: 15,
    alignSelf: "center",
    width: 55,
    height: 55
};

class CameraBottomBar extends Component {
    constructor(props) {
        super(props);
        this.captureImage = this.captureImage.bind(this);
        this.openSnaps = this.openSnaps.bind(this);
        this.openStories = this.openStories.bind(this);
    }

    captureImage() {
        const { handleButtonPress } = this.props;
        handleButtonPress();
    }
    openSnaps() {
        const { navigator } = this.props;
        navigator.replace({
            id: "snaps"
        });
    }
    openStories() {
        const { navigator } = this.props;
        navigator.replace({
            id: "stories"
        });
    }

    render() {
        return (
            <View style={containerStyle}>
                <TouchableOpacity
                    style={snapsButtonWrapperStyle}
                    onPress={this.openSnaps}
                >
                    <View style={snapsButtonContainerStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flex: 1}}
                    onPress={this.captureImage}
                >
                    <Image
                        source={require("../images/capture_icon.png")}
                        style={captureIconStyle}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={snapsButtonWrapperStyle}
                    onPress={this.openStories}
                >
                    <Icon
                        name="bars"
                        style={{margin: 30, alignSelf: "center"}}
                        size={32}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default CameraBottomBar;
