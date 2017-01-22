import React, { Component, PropTypes } from "react";
import { View, Navigator, Text, StatusBar } from "react-native";
import Splash from "../components/Splash";
import Dashboard from "../components/Dashboard";
import Diagnosis from "../components/Diagnosis";
import Camera from "../components/Camera";
import Picture from "../components/Picture";
import Analyze from "../components/Analyze";
import CropProfile from "../components/CropProfile";

// import Discover from "../components/Discover";
//import AddMe from "../components/AddMe";
// import Chats from "../components/Chats";
// import Stories from "../components/Stories";


import {fetchCropSet} from "../actions/CropActions";
import {loadCropListFromSet} from "../actions/CropListActions";

const propTypes = {
    dispatch: PropTypes.func.isRequired
}

class Root extends Component {
    constructor(props) {
        super(props);

        this.renderScene = this.renderScene.bind(this);
    }
    
    componentDidMount() {
        const { dispatch } = this.props;
        //dispatch initialization actions
        dispatch(fetchCropSet());
    }

    renderScene(route, navigator) {
        const routeId = route.id;
        switch (routeId) {
            case "analyze":
                return (
                    <Analyze
                        navigator={navigator}
                        { ...this.props }
                    />
                );
            case "chat":
                return (
                    <Dashboard
                        navigator={navigator}
                        { ...this.props }
                    />
                );
            
            case "camera":
                return (
                    <Camera
                        navigator={navigator}
                        { ...this.props }
                    />
                );
            
            case "dashboard":
                return (
                    <Dashboard
                        navigator={navigator}
                        { ...this.props }
                    />
                );

            case "splash":
                return (
                    <Splash
                        navigator={navigator}
                        { ...this.props }
                    />
                );
            
             case "diagnosis":
                return (
                    <Diagnosis
                        navigator={navigator}
                        { ...this.props }
                    />
                );
            
            case "picture":
                return (
                    <Picture
                        navigator={navigator}
                        { ...this.props }
                    />
                );
            
            default:
                if (routeId.slice(0, 4) === "crop") {
                    const { entities } = this.props;
                    const { crops } = entities;
                    const crop = crops[routeId.slice(4, routeId.length)];
                    return (
                        <CropProfile crop={crop} navigator={navigator} />
                    );
                }
                return null;
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#47cacc"}}>
                <Navigator
                    style={{ flex: 1}}
                    initialRoute={{ id: "splash", name: "splash"}}
                    renderScene={this.renderScene}
                />
            </View>
        );
    }
}

export default Root;
