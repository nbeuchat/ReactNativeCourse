import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const index = (props) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.inputText}
            value={props.value}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
        />
        <Button
            style={styles.inputButton}
            title={props.title}
            onPress={props.onPress}
        />
    </View>
);


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        width: "65%"
    },
    inputButton: {
        width: "35%"
    }
});

export default index;