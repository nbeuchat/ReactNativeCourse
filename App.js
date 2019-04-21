/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import PlaceList from './src/components/PlaceList';
import PlaceInput from './src/components/PlaceInput';
import placeImage from './src/assets/beautiful-castle.jpg';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    state = {
        places: []
    };

    placeAddedHandler = (placeName) => {
        this.setState(prevState => {
            return {
                places: prevState.places.concat({
                    key: Math.random().toString(),
                    name: placeName,
                    image: placeImage
                })
            };
        });
    };

    placeDeletedHandler = key => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter((place) => {
                    return place.key !== key;
                })
            }
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <PlaceList
                    items={this.state.places}
                    onItemDeleted={this.placeDeletedHandler}
                />
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
