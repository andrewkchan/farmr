import React, { Component, PropTypes } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconI from "react-native-vector-icons/MaterialIcons";

import { close } from "../actions/index";

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height:90,
        justifyContent:'space-between'
    },
    button: {
        margin: 20,
        marginLeft: 0,
        alignSelf: 'center'
    }
})

class PictureTopBar extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { dispatch } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={() => { dispatch(close()); }}>
                        <IconI
                            name="close"
                            style={styles.button}
                            size={30}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity>
                        <IconI
                            name="tag-faces"
                            style={styles.button}
                            size={30}
                            color="#fff"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconI
                            name="format-size"
                            style={styles.button}
                            size={30}
                            color="#fff"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconI
                            name="colorize"
                            style={styles.button}
                            size={30}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default PictureTopBar;
