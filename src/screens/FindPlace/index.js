import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PlaceList from '../../components/PlaceList';

class FindPlaceScreen extends Component {
  render() {
    return (
      <View>
        <PlaceList places={this.props.places} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
