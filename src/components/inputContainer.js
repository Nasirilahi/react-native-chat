"use strict";

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    TextInput
} from  'react-native';
import { connect } from 'react-redux';

import socket from '../socket/socket';


var windowSize = Dimensions.get('window').width;

class InputContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            message:''
        };
        this.onPress= this.onPress.bind(this);

    }


    onPress(){
        if(this.state.message !==''){
            socket.emit('new-message', {message: this.state.message, sendBy: this.props.username, time: new Date()});
            this.setState({message:''});
        }

    }
    render(){
        return(
            <View style={styles.inputContainer}>
                <View style={styles.textContainer}>
                    <TextInput
                        style={styles.input}
                        value={this.state.message}
                        underlineColorAndroid="rgba(0,0,0,0.0)"
                        onChangeText={(text) => this.setState({message: text})}
                    />
                </View>
                <View style={styles.sendContainer}>
                    <TouchableHighlight
                        underlayColor={'#4e4273'}
                        onPress={this.onPress}
                    >
                        <Text style={styles.sendLabel}>SEND</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}


/**
 * Styling to this component.
 * */

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection:'row',
        backgroundColor:'#90A4AE'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft:10,
        marginRight:5
    },
    sendContainer: {
        justifyContent: 'center',
        marginRight:5,

    },
    sendLabel: {
        color: '#ffffff',
        height: 32,
        fontSize: 15,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#757575',
        paddingTop: 5,
        borderRadius:3,
        padding:5
    },
    input: {
        color: 'white',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        height: 32,
        backgroundColor:'#424242'
    }
})


/**
 * connect function take two functions as arguments first to take store state values second to dispatch actions method.
 * */
function mapStateToProps(state){
    return{
        username:state.user.name
    };
}

/**
 * connect a react component to redux store.
 */

export default connect(mapStateToProps)(InputContainer);