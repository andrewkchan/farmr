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
    width: 250,
    height: 250,
    marginBottom: 400
};

class Splash extends Component {
    componentDidMount() {
        setTimeout(() => this.nav(), 3000);
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
                    source={require("../images/logo.png")}
                    style={imageStyle}
                    resizeMode="contain"
                />
            </View>
        );
    }
}

export default Splash;
