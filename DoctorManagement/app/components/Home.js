import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    }

    constructor(props) {
        super(props);
    }

    renderDoctorsList = (doctor, index) => {
        return (
            <TouchableOpacity activeOpacity={0.7}>
                <View key={index} style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Text style={styles.altText}>{doctor.name[0]}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.name}>
                            {doctor.name}
                        </Text>
                        <Text style={styles.specialist}>
                            {doctor.specialist}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    (this.props.doctors) ? <Text style={styles.altText}>No doctors available!</Text> :
                        <FlatList style={{ padding: 10 }} data={this.props.doctors}
                            renderItem={({ item, index }) => this.renderDoctorsList(item, index)}
                            keyExtractor={(item, index) => index.toString()} />
                }
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#b1cab1',
    },
    itemContainer: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    imageContainer: {
        backgroundColor: 'gray',
        borderRadius: 20,
        height: 40,
        width: 40,
        marginRight: 12
    },
    altText: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
    name: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold'
    },
    specialist: {
        color: 'gray',
        fontSize: 14,
        fontWeight: 'bold'
    },
    loginContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        borderBottomColor: 1,
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
        user: account.user,
        doctors: account.doctors
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);