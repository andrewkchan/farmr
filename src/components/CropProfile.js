import React, { Component, PropTypes } from "react";

import cropTypes from "../constants/CropTypes";

const propTypes = {
    crop: PropTypes.object.isRequired
};

class CropProfile extends Component {
    render() {
        const { crop } = this.props;
        
        return (
            <View>
                <Image
                    source={require("../images/splash_screen.png")}
                    style={imageSplash}
                    resizeMode="contain"
                />
                <Text>
                
                </Text>
            </View>
        );
    }
}