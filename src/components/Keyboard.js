import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { MasterView } from '../shared';
import Key from './keys/Key';

export default KeyBoard = (props) => {
    return (
        <MasterView>
            {
                props.keys.map((row, index) => (
                    <View key={index} style={styles.keyboardContainer}>
                        {
                            row.map((key, index) => (
                                <Key key={index} input={key} onPress={(type, symbol, value) => props.onKeyPress && props.onKeyPress(type, symbol, value)} />
                            ))
                        }
                    </View>
                ))
            }
        </MasterView>
    )
};

KeyBoard.propTypes = {
    keys: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.string.isRequired,
                symbol: PropTypes.string.isRequired,
                value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            }))).isRequired,
    onKeyPress: PropTypes.func
}

const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        flexDirection: 'row',
    }
})