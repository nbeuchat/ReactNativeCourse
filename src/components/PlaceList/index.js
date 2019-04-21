import React from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceListItem from '../PlaceListItem'

const placeList = (props) => (
    <View style={styles.listContainer}>
        {
            props.items.map((item, i) => (
                <PlaceListItem
                    key={i}
                    placeName={item}
                    onItemPressed={() => props.onItemDeleted(i)}
                />
            ))
        }
    </View>
);

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default placeList;