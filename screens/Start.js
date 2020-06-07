import React from 'react';
import { StyleSheet, StatusBar, View, Text, TouchableOpacity } from 'react-native';

const Start = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.view}>
                <TouchableOpacity
                    onPress={() => { navigation.push('Signup') }}
                    style={styles.button}
                >
                    <Text style={styles.text_button}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.push('Login') }}
                    style={styles.button}
                >
                    <Text style={styles.text_button}>Login</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#777',
    },
    button: {
        backgroundColor: '#ffe',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        height: 60,
        width: 140,
    },
    text_button: {
        fontSize: 22,
    },
});

export default Start;
