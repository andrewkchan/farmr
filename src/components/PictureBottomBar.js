import React, { Component, PropTypes } from "react";
import { View, TouchableHighlight, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconI from "react-native-vector-icons/MaterialIcons";

import { capture } from "../actions/index";

const propTypes = {
    dispatch: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height:90,
        justifyContent:'space-between'
    },
    button: {
        margin:20,
        marginRight:0,
        alignSelf:'center'
    }
});

class PictureBottom extends Component {
    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);

    }
    captureImage() {
        const { dispatch } = this.props;
        dispatch(capture());
    }
    onButtonPress(){
         const { navigator } = this.props;
        navigator.replace({
        id: "analyze"
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: "row"}}>
                <TouchableHighlight>
                    <IconI
                        name="send"
                        style={styles.button}
                        size={30}
                        color="#fff"
                        onPress={this.onButtonPress}
                    />
                </TouchableHighlight>
                </View>
            </View>
        );
    }
}

PictureBottom.propTypes = propTypes;

export default PictureBottom;
