import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR } from 'react-native-material-ui';

export const UITheme = {
    palette: {
        primaryColor: COLOR.lightBlue500,
        accentColor: COLOR.lightBlue700,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export const AppTheme = StyleSheet.create({
    keyContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#6390fe',
        borderWidth: 0.5,
    }
});