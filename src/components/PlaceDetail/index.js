import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const placeDetail = props => {
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
          <Button title="Delete" color="red" onPress={props.onPlaceDeleted} />
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
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row"
  },
  placeImage: {
    height: 200,
    width: "100%"
  },
  placeName: {
    fontWeight: "bold",
    fontSize: 28
  }
});

export default placeDetail;
