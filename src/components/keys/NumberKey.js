import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BaseKey from './BaseKey';
import { AppTheme } from '../../shared/AppTheme';
import { Button } from 'react-native-material-ui';

export default class NumberKey extends BaseKey {
    render() {
        return (
            <View style={[AppTheme.keyContainer, styles.number]} >
                <Button style={numberKey} text={this.props.symbol && this.props.symbol} onPress={() => this.onPress(this.props.type, this.props.symbol, this.props.value)} />
            </View>
        )
    }
}


// material button style
const numberKey = {
    container: {
        flex: 1,
        backgroundColor: '#6390fe',
        borderColor: '#6b97fe'
    },
    text: {
        fontFamily: 'Helvetica-Light',
        fontSize: 22,   
    }
}

const styles = StyleSheet.create({
    number: {
        backgroundColor: '#6390fe',
        borderColor: '#6b97fe',
    },
});