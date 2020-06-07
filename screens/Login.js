import React from 'react';
import { StyleSheet, StatusBar, View, Text, Button } from 'react-native';

const Login = ({navigation}) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.view}>
                <Text style={styles.text}>LOGIN</Text>
                <Button
                title={'Sign In'}
                onPress={() => navigation.navigate('MainNavigation')}
                ></Button>
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
