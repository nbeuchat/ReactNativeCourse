import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PlaceList from '../../components/PlaceList';
import getScreenName from '../../screens/getScreenName';

class FindPlaceScreen extends Component {
  itemSelectedHandler = (key) => {
    const selectedPlace = this.props.places.find((place) => {
      return key === place.key;
    });

    Navigation.push(this.props.componentId, {
      component: {
        name: getScreenName('PlaceDetailScreen'),
        passProps: {
          place: selectedPlace
        },
        options: {
          topBar: {
            title: {
              text: selectedPlace.name
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
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
