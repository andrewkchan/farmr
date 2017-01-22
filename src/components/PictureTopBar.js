import React, { Component, PropTypes } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconI from "react-native-vector-icons/MaterialIcons";

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
        this.onButtonPress = this.onButtonPress.bind(this);

    }
    onButtonPress(){
        const { navigator } = this.props;
        navigator.replace({
        id: "camera"
        });
    }
    render() {
        const { dispatch } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={this.onButtonPress}>
                        <IconI
                            name="close"
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
