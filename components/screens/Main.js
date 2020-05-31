import React from 'react';
import { StyleSheet, StatusBar, View, Button } from 'react-native';

const Main = ({navigation}) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.view}>
                <Button
                    title='Sign up'
                    onPress={() => { navigation.push('Signup') }}
                >
                </Button>
                <Button
                    title='Log in'
                    onPress={() => { navigation.push('Login') }}
                ></Button>
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
        backgroundColor: '#ccc',
      },
});

export default Main;
