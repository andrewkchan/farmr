import React, { Component, PropTypes } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

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

const imageSplash = {
    width: 250,
    height: 250,
    marginBottom: 400
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
//<Image style={styles.bgContainer} resizeMode='cover' source={require('./img/bg.png')} />
//const styles = StyleSheet.create({ bgContainer: { flex:1, width: null, height: null } });
    render() {
        return (
            <View
                style={viewStyle}
            >
                <Image
                    source={require("../images/smallsplash.png")}
                    style={imageSplash}
                    resizeMode="contain"
                />
            </View>
        );
    }
}

export default Splash;
