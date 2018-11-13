import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../actions/accountActions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'patient',
            password: '1234',
        }
    }

    authenticate = () => {
        let { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
            this.props.navigation.navigate('Home')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <TextInput style={styles.input}
                        value={this.state.email}
                        placeholder="Username"
                        onChangeText={(email) => this.setState({ email })} />
                    <TextInput style={styles.input}
                        value={this.state.password}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })} />

                    <TouchableOpacity onPress={() => this.authenticate()}>
                        <Text style={styles.button}>{this.props.isProcessing ? "Logging In..." : "Login"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#b1cab1',
        padding: 20,
    },
    loginContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    button: {
        backgroundColor: 'red',
        alignContent: 'center',
        textAlign: 'center',
        padding: 10
    }
});

const mapStateToProps = ({ account }) => {
    return {
        user: account.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);