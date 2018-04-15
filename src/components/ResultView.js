import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';

import { MasterView } from '../shared';
import Key from './keys/Key';

export default ResultView = (props) => {
    return (
        <MasterView style={styles.resultContainer}>
            <View style={{}}>
                <Text style={styles.result} numberOfLines={1} ellipsizeMode='head'>{props.input}</Text>
                <Text style={[styles.result, { fontSize: 50, marginTop: props.output.length ? 20 : 0 }]} numberOfLines={1} ellipsizeMode='head'>{props.output}</Text>
            </View>
        </MasterView>
    )
};

ResultView.propTypes = {
    input: PropTypes.string,
    output: PropTypes.string
}

const styles = StyleSheet.create({
    resultContainer: {
        flex: 0.4,
        marginTop: Platform.select({ ios: 30, android: 0 }),
        borderColor: '#202020',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 5
    },
    result: {
        alignSelf: 'flex-end',
        textAlign: 'right',
        fontFamily: 'Helvetica-Light',
        color: '#424242',
        fontSize: 30,
    }
})