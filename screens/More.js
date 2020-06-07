import React from 'react';
import { StyleSheet, StatusBar, View, Text, Button } from 'react-native';

const More = ({navigation}) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.view}>
              <Text>MORE</Text>
              <Button
              title={'Logout'}
              onPress={() => navigation.navigate('InitialNavigator')}
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
});

export default More;
