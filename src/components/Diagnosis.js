import React, { Component, PropTypes } from "react";
import { View, Text, Image } from "react-native";

const containerStyle = {
    flexDirection: "column",
    height: 90,
    justifyContent: "space-between"
};

const onButtonPress = () => {
    
};

class Diagnosis extends Component {
    render() {
        return (
                <View style={containerStyle}>
                    <Text>
                        Diseases!
                    </Text>
                    
                    <TouchableOpacity>
                        <Button
                            onPress ={onButtonPress}
                        />
                      
                    </TouchableOpacity>
                    
                </View>
            
            
            );
    }
    
}


export default Disease;