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
    captureImage() {
        const { dispatch } = this.props;
        dispatch(capture());
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: "row"}}>
                    <TouchableHighlight>
                        <IconI
                            name="timer-3"
                            style={styles.button}
                            size={30}
                            color="#fff"
                        />
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <IconI
                            name="get-app"
                            style={styles.button}
                            size={30}
                            color="#fff"
                        />
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <IconI
                            name="playlist-add"
                            style={styles.button}
                            size={30}
                            color="#fff"
                        />
                    </TouchableHighlight>
                </View>
                <View style={{flexDirection: "row"}}>
                <TouchableHighlight>
                    <IconI
                        name="send"
                        style={styles.button}
                        size={30}
                        color="#fff"
                    />
                </TouchableHighlight>
                </View>
            </View>
        );
    }
}

PictureBottom.propTypes = propTypes;

export default PictureBottom;
