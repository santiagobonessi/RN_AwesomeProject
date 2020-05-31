import React from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';

const Login = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.view}>
                <Text style={styles.text}>LOGIN</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#777',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    },
});

export default Login;
