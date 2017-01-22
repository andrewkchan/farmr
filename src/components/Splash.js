import React, { Component, PropTypes } from "react";
import { View, Text, Image } from "react-native";

const propTypes = {
    navigator: PropTypes.object.isRequired
};

const viewStyle = {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff73f"
};

const imageStyle = {
    width: 360,
    height: 480,
  
};

class Splash extends Component {
    componentDidMount() {
        setTimeout(() => this.nav(), 2000);
    }

    nav() {
        const { navigator } = this.props;
        navigator.replace({
            id: "dashboard"
        });
    }

    render() {
        return (
            <View
                style={viewStyle}
            >
                <Image
                    source={require("../images/splash_screen.png")}
                    style={imageStyle}
                    resizeMode="contain"
                />
            </View>
        );
    }
}

export default Splash;
