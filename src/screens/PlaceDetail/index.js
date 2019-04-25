import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace } from '../../store/actions';

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.place.key);
    Navigation.pop(this.props.componentId);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.place.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.place.name}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  buttonsContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  placeImage: {
    height: 200,
    width: '100%'
  },
  placeName: {
    fontWeight: 'bold',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center',
    marginHorizontal: 5
  }
});

export default connect(
  null,
  { onDeletePlace: deletePlace }
)(PlaceDetail);
