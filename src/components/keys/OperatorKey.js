import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BaseKey from './BaseKey';
import { AppTheme } from '../../shared/AppTheme';
import { Button } from 'react-native-material-ui';

export default class OperatorKey extends BaseKey {
    render() {
        return (
            <View style={[AppTheme.keyContainer, styles.operator]} >
                <Button style={operatorKey} text={this.props.symbol && this.props.symbol} onPress={() => this.onPress(this.props.type, this.props.symbol, this.props.value)} />
            </View>
        )
    }
}

// material button style
const operatorKey = {
    container: {
        flex: 1,
        backgroundColor: '#6b97fe',
        borderColor: '#03e5ff'
    },
    text: {
        fontFamily: 'Helvetica-Light',
        fontSize: 25,
    }
}

const styles = StyleSheet.create({
    operator: {
        backgroundColor: '#6b97fe',
        borderColor: '#6390fe',
    },
});