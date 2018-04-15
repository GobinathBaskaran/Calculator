import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { MasterView } from '../shared';
import KeyBoard from './Keyboard';
import ResultView from './ResultView';
import { keyPress, clear, deleteInput } from '../actions';
import { KEYS, KEY_TYPE } from '../shared/defaultData';


class Calculator extends Component {

    onKeyPress = (type, symbol, value) => {
        let key = {
            type,
            symbol,
            value
        };
        if (type === KEY_TYPE.ACTION && value === 'Clear') {
            this.props.clear();
        } else if (type === KEY_TYPE.ACTION && value === 'Delete') {
            this.props.deleteInput();
        } else {
            this.props.keyPress(key);
        }
    }

    render() {
        return (
            <MasterView >
                <ResultView input={this.props.input} output={this.props.output} />
                <KeyBoard keys={KEYS} onKeyPress={(type, symbol, value) => this.onKeyPress(type, symbol, value)} />
            </MasterView>
        )
    }
}

const mapStateToProps = ({ calculator }) => {
    return {
        input: calculator.input,
        output: calculator.output
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ keyPress, clear, deleteInput }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)