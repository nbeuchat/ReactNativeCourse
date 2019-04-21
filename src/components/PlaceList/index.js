import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PlaceListItem from '../PlaceListItem';

const placeList = (props) => (
  <FlatList
    style={styles.listContainer}
    data={props.items}
    renderItem={(info) => (
      <PlaceListItem
        placeName={info.item.name}
        placeImage={info.item.image}
        onItemPressed={() => props.onItemSelected(info.item.key)}
      />
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;
