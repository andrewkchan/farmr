import React, { Component, PropTypes } from "react";
import { View, Navigator, Text, StatusBar } from "react-native";
import Splash from "../components/Splash";
import Dashboard from "../components/Dashboard";
// import Snaps from "../components/Snaps";
// import Discover from "../components/Discover";
//import AddMe from "../components/AddMe";
// import Chats from "../components/Chats";
// import Stories from "../components/Stories";

const propTypes = {
    dispatch: PropTypes.func.isRequired
}

class Root extends Component {
    constructor(props) {
        super(props);

        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator) {
        const routeId = route.id;
        switch (routeId) {
            case "chat":
                return (
                    <Dashboard
                        navigator={navigator}
                        { ...this.props }
                    />
                );
                /*
                return (
                    <Chats
                        navigator={navigator}
                        { ...route.passProps }
                        { ...this.props }
                    />
                );
                */

            case "addMe":
                return (
                    <Dashboard
                        navigator={navigator}
                        { ...this.props }
                    />
                );
                /*
                return (
                    <AddMe navigator={navigator} />
                );
                */

            case "dashboard":
                return (
                    <Dashboard
                        navigator={navigator}
                        { ...this.props }
                    />
                );

            case "discover":
                return (
                    <Discover navigator={navigator} />
                );

            case "stories":
                return (
                    <Dashboard
                        navigator={navigator}
                        { ...this.props }
                    />
                );
                /*
                return (
                    <Stories navigator={navigator} />
                );
                */

            case "snaps":
                return (
                    <Dashboard
                        navigator={navigator}
                        { ...this.props }
                    />
                );
                /*
                return (
                    <Snaps navigator={navigator} />
                );
                */

            case "splash":
                return (
                    <Splash
                        navigator={navigator}
                        { ...this.props }
                    />
                );

            default:
                return null;
        }
    }

    render() {
        return (
            <View style={{ flex: 1}}>
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
