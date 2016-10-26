import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    TextInput
} from 'react-native';
//import socket from '../socket/socket';
// import  SocketIO  from 'react-native-socketio';
//import { connect } from 'react-redux';

var windowSize = Dimensions.get('window').width;

export default class InputContainer extends Component{
    constructor(){
        super();
        this.state = {
            message:''
        };
        // this.socket = new SocketIO('localhost:3000', {});
        // this.socket.connect();
        this.onPress= this.onPress.bind(this);

    }

    componentDidMount () {

        // this.socket.on('connect', () => {
        //  console.log('connected to socketio server');
        // });


    }


    onPress(){
        console.log(this.state.message);
       // socket.emit('new-message', {message: this.state.message, userID: socket.id, time: new Date()})
        this.setState({message:''});
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
        borderRadius:5
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