import React, { Component } from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';


class PlaceInput extends Component{
    state = {
        placeName: ""
    };

    placeNameChangedHandler = (value) => {
        this.setState({
            placeName: value
        });
    };

    placeSubmitHandler = () => {
        if(this.state.placeName.trim() !== ""){
            this.props.onPlaceAdded(this.state.placeName);
        }
    };

    render(){
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    value={this.state.placeName}
                    placeholder={this.props.placeholder}
                    onChangeText={this.placeNameChangedHandler}
                />
                <Button
                    style={styles.inputButton}
                    title={this.props.title}
                    onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }
}

PlaceInput.defaultProps = {
    title: "Add",
    placeholder: "Enter a place name"
};


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        width: "65%"
    },
    inputButton: {
        width: "35%"
    }
});

export default PlaceInput;