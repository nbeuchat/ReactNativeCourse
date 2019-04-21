import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListItem from '../ListItem/ListItem'

const list = (props) => (
    <View style={styles.listContainer}>
        {
            props.items.map((item, i) => (
                <ListItem key={i} placeName={item}/>
            ))
        }
    </View>
);

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default list;