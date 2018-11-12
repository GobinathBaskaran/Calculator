import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <TextInput ref={(input) => this.username = input.target.value} value={this.state.userName} placeholder="Username" />
                    <TextInput ref={(input) => this.username = input.target.value} value={this.state.password} placeholder="Password" secureTextEntry={true} />

                    <TouchableOpacity activeOpacity={0.7}>
                        <View>
                            <Text>{this.props.isProcessing ? "Logging In..." : "Login"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    loginContainer: {

    }
});