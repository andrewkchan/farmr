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
    constructor(props){
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
    }
    
    onButtonPress(){
          const { navigator } = this.props;
        navigator.replace({
            id: "dashboard"
        });
    }
    
    render() {
        const { crop } = this.props;
        
        return (
            <View style={{flex: 1, flexDirection: "column"}}>
                <Image
                    source={require("../images/splash_screen.png")}
                    style={profilePic}
                    resizeMode="contain"
                />
                <Text style={{alignSelf: "center"}}>
                { crop.name }
                </Text>
                <Text style={{alignSelf: "center"}}>
                { crop.species.name }
                </Text>
                <Text style={{alignSelf: "center"}}>
                { crop.condition.name }
                </Text>
                 <TouchableOpacity>
                        <Icon
                            name = "times"
                            size={50}
                            onPress ={this.onButtonPress}
                            style = {styles.button}
                            color="#BA4F4F"
                        />
                </TouchableOpacity>
            </View>
        );
    }
}

export default CropProfile;