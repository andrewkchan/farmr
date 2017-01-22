import React, { Component, PropTypes } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
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

const onButtonPress = () => {
     const { navigator } = this.props;
        navigator.replace({
            id: "dashboard"
        });
};

class Diagnosis extends Component {
    render() {
        return (
                <View style={containerStyle}>
                    <Text>
                        Diseases!
                    </Text>
                    
                    <TouchableOpacity>
                        <Icon
                            name = "times"
                            onPress ={onButtonPress}
                            style = {styles.button}
                        />
                      
                    </TouchableOpacity>
                    
                </View>
            
            
            );
    }
    
}


export default Diagnosis;