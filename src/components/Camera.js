import React, { Component, PropTypes } from "react";
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Camera from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import IconI from "react-native-vector-icons/Ionicons";
import CameraBottomBar from "../components/CameraBottomBar";
import CameraTopBar from "../components/CameraTopBar";

import {capture, receiveCapturedImage} from "../actions/index";

const defaultButtonStyle = {
    margin: 15,
    alignSelf: "center",
    width: 55,
    height: 55
};
const pressedButtonStyle = {
    margin: 17,
    alignSelf: "center",
    width: 55,
    height: 55
};

const propTypes = {
    dispatch: PropTypes.func.isRequired
};

class CameraWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //captureStyle -- the stylesheet for the camera button
            captureStyle: defaultButtonStyle,
            captureType: Camera.constants.Type.back,
            flashmode: Camera.constants.FlashMode.off
        };

        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress() {
        const { dispatch } = this.props;
        this.camera.capture()
            .then((data) => {
                dispatch(capture());
                console.log("recv data from camera");
                dispatch(receiveCapturedImage({uri: data.path}));
            })
            .catch(err => { console.error(err); });
        this.setState({
            captureStyle: pressedButtonStyle
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(camera) => { this.camera = camera; }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    type={this.state.captureType}
                    flashMode={this.state.flashmode}
                >
                    <View style={{ flex: 1, justifyContent: "space-between" }}>
                        <CameraTopBar {...this.props} />
                        <CameraBottomBar { ...this.props } handleButtonPress={this.handleButtonPress} />
                    </View>
                </Camera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    },
    capture: {
        flex: 0,
        backgroundColor: "#fff",
        borderRadius: 5,
        color: "#000",
        padding: 10,
        margin: 40
    }
});

export default CameraWrapper;
