import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BaseKey from './BaseKey';
import { AppTheme } from '../../shared/AppTheme';
import { Button } from 'react-native-material-ui';


export default class ActionKey extends BaseKey {
    render() {
        return (
            <View style={[AppTheme.keyContainer, styles.action]} >
                <Button style={actionKey} text={this.props.symbol && this.props.symbol} onPress={() => this.onPress(this.props.type, this.props.symbol, this.props.value)} />
            </View>
        )
    }
}

// material button style
const actionKey = {
    container: {
        flex: 1,
        backgroundColor: '#6b97fe',
        borderColor: '#6b97fe'
    },
    text: {
        fontFamily: 'Helvetica-Light',
        fontSize: 20,
    }
}

const styles = StyleSheet.create({
    action: {
        backgroundColor: '#6b97fe',
        borderColor: '#6390fe',
    }
});