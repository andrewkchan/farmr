import React, { Component, PropTypes } from "react";
import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { updateCrop } from "../actions/CropActions";
import cropTypes from "../constants/CropTypes";
import { loadCropListFromSet } from "../actions/CropListActions";


const containerStyle = {
    flexDirection: "column",
    justifyContent: "space-between"
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height:90,
        justifyContent:'space-between'
    },
    button: {
        marginTop: 200,
        marginLeft: 0,
        alignSelf: 'center',
    }
})



class Diagnosis extends Component {
    constructor(props){
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
    }
    onButtonPress(){
        const { dispatch, navigator, scope } = this.props;
        const { cropId } = scope;
        dispatch(updateCrop(cropId, {
            name: "NEW CROP",
            species: cropTypes.POTATO,
            condition: cropTypes.POTATO.conditions.LATE_BLIGHT,
            timestamp: Date.now()
        }));
        dispatch(loadCropListFromSet());
        navigator.replace({
            id: "dashboard"
        });
    }
    render() {
        if (this.props.scope.diagnosisComplete == false){
            return(
                <View style={{backgroundColor:'#fff'}}>
                <Image source={{uri: '../images/default.gif'}} />
                </View>
                );
        }
        else {
        return (
                <View style={containerStyle}>
                    <Text style = {{marginTop: 20, textAlign: 'center', color: 'black', fontSize: 40}}>
                        Diseases:{"\n\n"} 
                        {this.props.scope.diagnosis}
                    </Text>
                    <Text style = {{marginTop: 20, textAlign: 'center', color: 'black', fontSize: 40}}>
                        Recommendations:
                        {this.props.scope.suggestions}
                    </Text>
                    
                    <TouchableOpacity>
                        <Icon
                            name = "arrow-circle-right"
                            size={50}
                            onPress ={this.onButtonPress}
                            style = {styles.button}
                            color="#99CE99"
                        />
                      
                    </TouchableOpacity>
                    
                </View>
            
            
            );
        }
    }
    
}


export default Diagnosis;