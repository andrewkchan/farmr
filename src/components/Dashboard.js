import React, { Component, PropTypes } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";

import Camera from "../components/Camera";
import Picture from "../components/Picture";

const propTypes = {
    dispatch: PropTypes.func.isRequired
};

const defaultStyle = {
    width: 100,
    height: 100,
    marginBottom: 350,
    alignSelf: "center"
};

const thumbnailStyle = {
    width: 30,
    height: 30,
    //flexDirection: 'row'
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
        const { croplist, entities } = this.props;
        const { cropIds } = croplist;
        const { crops } = entities;
        if (cropIds.length === 0) {
            return (
                <View>
                <View style={{alignSelf: "center", margin: 15}}>
                    <Text>
                    You have no crops in your circle. :(
                    </Text>
                </View>
                <Image
                    source={require("../images/dirticon.png")}
                    style={defaultStyle}
                    resizeMode="contain"
                />
                </View>
            );
        }
        
        const MAX_ITEMS_PER_ROW = 3;
        const rows = [];
        for (let i = 0; i < cropIds.length; i += MAX_ITEMS_PER_ROW) {
            const cropRow = cropIds.slice(i, i + MAX_ITEMS_PER_ROW).map((cropId) => {
                return (
                    <TouchableOpacity style={{flex: 1, flexDirection: "column", alignSelf: "center", margin: 10, marginLeft: 30, }}>
                        <Image
                            source={require("../images/dirticon.png")}
                            style={thumbnailStyle}
                            resizeMode="contain"
                        />
                        <Text>
                        {crops[cropId].name}
                        </Text>
                    </TouchableOpacity>
                );
            });
            rows.push((
                <View style={{flex: 1, flexDirection: "row", alignSelf: "center"}}>
                {cropRow}
                </View>
            ));
        }
        return rows;
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
                {this.renderCrops()}
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
