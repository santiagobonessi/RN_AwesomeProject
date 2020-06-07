import React from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';

const Browse = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.view}>
              <Text>BROWSE</Text>
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

export default Browse;
