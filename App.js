/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import PlaceList from "./src/components/PlaceList";
import PlaceInput from "./src/components/PlaceInput";
import PlaceDetail from "./src/components/PlaceDetail";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName,
          image: {
            uri:
              "https://10mosttoday.com/wp-content/uploads/2013/07/Neuschwanstein_Castle-1024x682.jpg"
          }
        })
      };
    });
  };

  placeDeleteSelectedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== this.state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  };

  placeUnselectedHandler = () => {
    this.setState({
      ...this.state,
      selectedPlace: null
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          place={this.state.selectedPlace}
          onModalClosed={this.placeUnselectedHandler}
          onPlaceDeleted={this.placeDeleteSelectedHandler}
        />
        <Text style={styles.welcome}>Favorite locations manager!</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          items={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
