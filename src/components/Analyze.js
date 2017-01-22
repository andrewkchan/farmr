import React, { Component, PropTypes } from "react";
import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const containerStyle = {
    flexDirection: "column",
    height: 90,
    justifyContent: "space-between"
};

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



class Analyze extends Component {
     componentDidMount() {
        setTimeout(() => this.nav(), 1000);
    }

    nav() {
        const { navigator } = this.props;
        navigator.replace({
            id: "diagnosis"
        });
    }
    constructor(props){
        super(props);
        
    }
    render() {
        return (
                <View style={containerStyle}>
                    <Text style = {{marginTop: 20, textAlign: 'center', color: 'black', fontSize: 40}}>
                        Analyzing your crops...
                    </Text>
                    
                </View>
            
            
            );
    }
    
}


export default Analyze;