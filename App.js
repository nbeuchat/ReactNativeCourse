/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from './src/components/PlaceList';
import PlaceInput from './src/components/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail';
import {
  addPlace,
  deleteSelectedPlace,
  selectPlace,
  unselectPlace
} from './src/store/actions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};
class App extends Component<Props> {
  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  };

  placeDeleteSelectedHandler = () => {
    this.props.onDeleteSelectedPlace();
  };

  placeUnselectedHandler = () => {
    this.props.onUnselectPlace();
  };

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          place={this.props.selectedPlace}
          onModalClosed={this.placeUnselectedHandler}
          onPlaceDeleted={this.placeDeleteSelectedHandler}
        />
        <Text style={styles.welcome}>Favorite locations manager!</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          items={this.props.places}
          onItemSelected={this.placeSelectedHandler}
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
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeleteSelectedPlace: () => dispatch(deleteSelectedPlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onUnselectPlace: () => dispatch(unselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
