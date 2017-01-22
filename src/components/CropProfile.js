import React, { Component, PropTypes } from "react";
import { View, Image, Text } from "react-native";

import cropTypes from "../constants/CropTypes";

const propTypes = {
    crop: PropTypes.object.isRequired
};

const profilePic = {
    width: 100,
    height: 100,
    alignSelf: "center"
};

class CropProfile extends Component {
    render() {
        const { crop } = this.props;
        
        return (
            <View style={{flex: 1, flexDirection: "column"}}>
                <Image
                    source={require("../images/splash_screen.png")}
                    style={profilePic}
                    resizeMode="contain"
                />
                <Text>
                { crop.name }
                </Text>
                <Text>
                { crop.species.name }
                </Text>
                <Text>
                { crop.condition.name }
                </Text>
            </View>
        );
    }
}

export default CropProfile;