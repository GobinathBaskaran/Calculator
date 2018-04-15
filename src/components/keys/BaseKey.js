import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


export default class BaseKey extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        this.props.onPress && this.props.onPress(this.props.type, this.props.symbol, this.props.value);
    }
}

BaseKey.propTypes = {
    type: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onPress: PropTypes.func
}

BaseKey.defaultProps = {
    type: 'Basic',
    symbol: '',
    value: '',
}