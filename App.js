/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import ListItem from './src/components/ListItem';
import List from './src/components/List';
import UserInput from './src/components/UserInput';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    state = {
        placeName: "",
        places: []
    };

    placeNameChangedHandler = (value) => {
        this.setState({
            placeName: value
        });
    };

    placeSubmitHandler = () => {
        if(this.state.placeName.trim() !== ""){
            this.setState(prevState => {
                return {
                    places: prevState.places.concat(this.state.placeName)
                };
            });
        }
    };

    render() {
        const placesOutput = this.state.places.map((place,i) => (
            <ListItem key={i} placeName={place} />
        ));
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <UserInput
                    title="Add!"
                    placeholder="Enter a place name"
                    value={this.state.placeName}
                    onPress={this.placeSubmitHandler}
                    onChangeText={this.placeNameChangedHandler}
                />
                <List items={this.state.places} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});
