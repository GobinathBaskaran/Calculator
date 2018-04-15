import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { KEY_TYPE } from '../../shared/defaultData';

import NumberKey from './NumberKey';
import OperatorKey from './OperatorKey';
import ActionKey from './ActionKey';

export default class Key extends Component {

    renderKey() {
        let key = this.props.input
        if (key.type == KEY_TYPE.NUMBER)
            return <NumberKey type={key.type} value={key.value} symbol={key.symbol} onPress={(type, symbol, value) => this.props.onPress && this.props.onPress(type, symbol, value)} />
        else if (key.type == KEY_TYPE.OPERATOR)
            return <OperatorKey type={key.type} value={key.value} symbol={key.symbol} onPress={(type, symbol, value) => this.props.onPress && this.props.onPress(type, symbol, value)} />
        else
            return <ActionKey type={key.type} value={key.value} symbol={key.symbol} onPress={(type, symbol, value) => this.props.onPress && this.props.onPress(type, symbol, value)} />
    }

    render() {
        return this.renderKey()

    }

}

Key.propTypes = {
    input: PropTypes.shape({
        type: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }).isRequired,
    onPress: PropTypes.func
}