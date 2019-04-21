import React from 'react';
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = (props) => {
  let modalContent = null;

  if (props.place) {
    modalContent = (
      <View>
        <Image source={props.place.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.place.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      visible={props.place != null}
      animationType="slide"
      onRequestClose={props.onModalClosed}
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={props.onPlaceDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
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
