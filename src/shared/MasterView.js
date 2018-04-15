import React from 'react';
import { View, StyleSheet } from 'react-native';

const MasterView = (props) => {
    return (
        <View style={[styles.container, props.style ? props.style : null]}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6b97fe',
    }
});

export default MasterView;