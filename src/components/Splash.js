import React, { Component, PropTypes } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const propTypes = {
    navigator: PropTypes.object.isRequired
};

var styles = StyleSheet.create({
    resizeMode: {
    width: 90,
    height: 60,
    borderWidth: 0.5,
    borderColor: 'black'
  }
});

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
                    source={require("../images/splash.png")}
                    style={styles.resizeMode}
                    resizeMode={Image.resizeMode.center}
                    
                />
            </View>
        );
    }
}

export default Splash;
