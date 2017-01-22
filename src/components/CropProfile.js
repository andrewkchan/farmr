import React, { Component, PropTypes } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import cropTypes from "../constants/CropTypes";

const propTypes = {
    crop: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
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
        this.goToCamera = this.goToCamera.bind(this);
    }
    
    onButtonPress(){
        const { navigator } = this.props;
        navigator.replace({
        id: "dashboard"
        });
    }
    
    goToCamera() {
        const { dispatch, navigator } = this.props;
        navigator.replace({
            id: "camera"
        });
    }
    
    render() {
        const { crop } = this.props;
        
        return (
            <View 
                style={{
                    flex: 1, 
                    flexDirection: "column"
                }}>
                <View
                    style={{
                    flex: 1, 
                    flexDirection: "column", 
                    backgroundColor: "#CC8C47",
                    borderColor: '#795126',
                    borderRadius: 6,
                    borderWidth: 10,
                }}>
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
                <View style={{flexDirection:'row'}}>
                 <TouchableOpacity  onPress={this.onButtonPress}>
                        <Icon
                            name = "arrow-circle-left"
                            size={50}
                            style = {{alignSelf:'center', marginLeft:20, marginTop: 180}}
                            color="#499E9C"
                        />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToCamera}>
                     <Icon
                            name = "camera"
                            size={45}
                            style = {{alignSelf:'center',marginLeft: 210, marginTop: 180 }}
                            color="gray"
                        />
                </TouchableOpacity>
                </View>
                </View>
                
            </View>
        );
    }
}

export default CropProfile;