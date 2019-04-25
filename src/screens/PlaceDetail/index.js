import React from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={props.place.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.place.name}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={props.onPlaceDeleted}>
          <View style={styles.deleteButton}>
            <Icon size={30} name="ios-trash" color="red" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

export default placeDetail;
