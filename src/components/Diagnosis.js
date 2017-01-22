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



class Diagnosis extends Component {
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
        return (
                <View style={containerStyle}>
                    <Text>
                        Diseases!
                    </Text>
                    
                    <TouchableOpacity>
                        <Icon
                            name = "times"
                            size={30}
                            onPress ={this.onButtonPress}
                            style = {styles.button}
                            color="#BA4F4F"
                        />
                      
                    </TouchableOpacity>
                    
                </View>
            
            
            );
    }
    
}


export default Diagnosis;