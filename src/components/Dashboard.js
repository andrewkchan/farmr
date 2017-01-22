import React, { Component, PropTypes } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";

import Camera from "../components/Camera";
import Picture from "../components/Picture";

const propTypes = {
    dispatch: PropTypes.func.isRequired
};

const imageStyle = {
    width: 100,
    height: 100,
    marginBottom: 350,
    alignSelf: "center"
};

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.goToCamera = this.goToCamera.bind(this);
    }
    
    goToCamera() {
         const { navigator } = this.props;
        navigator.replace({
            id: "camera"
        });
    }
    
    renderCrops() {
        const { croplist, crops } = this.props;
        const { cropIds } = croplist;
        const { crops } = crops;
        cropIds.forEach((cropId) => {
            
        });
    }
    
    render() {
        const { captured } = this.props;

        if (captured) {
            return (
                <View style={{flex: 1}}>
                    <Picture {...this.props} style={{flex: 1}} />
                </View>
            );
        }

        return (
            <View style={{flex: 1, flexDirection: "column"}}>
                <View style={{alignSelf: "center", margin: 15}}>
                    <Text>
                    You have no crops in your circle. :(
                    </Text>
                </View>
                <Image
                    source={require("../images/dirticon.png")}
                    style={imageStyle}
                    resizeMode="contain"
                />
                <TouchableOpacity
                    style={{flex: 1, alignSelf: "center"}}
                    onPress={this.goToCamera}
                >
                    <Image
                        source={require("../images/plusIcon.png")}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
               
            </View>
        );
    }
}

export default Dashboard;
