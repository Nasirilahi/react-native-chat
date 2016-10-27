'use strict';

import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import socket from '../socket/socket';
import {AppRegistry, StyleSheet, TouchableHighlight, Text, View, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

class MessageView extends Component {
    render() {
        return(
            <View style={styles.container}>
                    {this.props.username === this.props.message.sendBy  ?
                        <View style={styles.messageBlockRight}>
                            <Text style={[styles.textRight]}>
                                {this.props.message.sendBy}
                            </Text>
                            <Text style={styles.text}>
                                {this.props.message.message}
                            </Text>
                            <Text style={[styles.time ,styles.timeRight]}>{moment(this.props.message.time).format('hh:mm a')}</Text>

                        </View> :
                        <View style={styles.messageBlock}>
                            <Text style={styles.textLeft}>
                                {this.props.message.sendBy}
                            </Text>
                            <Text style={styles.textreciver}>
                                {this.props.message.message}
                            </Text>

                            <Text style={[styles.time ,styles.timeLeft]}>{moment(this.props.message.time).format('hh:mm a')}</Text>
                        </View>
                    }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    messageBlock: {
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#42C0FB",
        padding: 5,
        justifyContent: "center",
        alignSelf: "flex-start",
        borderRadius: 6,
        marginBottom: 5
    },
    messageBlockRight: {
        flexDirection: "column",
        backgroundColor: "white",
        padding: 5,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 6,
        marginBottom: 5
    },
    text: {
        color: "#5c5c5c",
        alignSelf: "flex-start"
    },
    textreciver: {
        color: "white",
        alignSelf: "flex-end",
        textAlign: "right"
    },
    time: {
        alignSelf: "flex-end",
        marginTop:5,
        fontSize:12,

    },
    timeRight: {
        alignSelf: "flex-end",
        color: "#FFB74D",

    },
    timeLeft:{
        alignSelf: "flex-end",
        color: "#29B6F6",

    },
    textRight: {
        color: "#FF9800",
        alignSelf: "flex-start",
        textAlign: "right"
    },
    textLeft: {
        color: "#42C0FB",
        alignSelf: "flex-start",
        textAlign: "left"
    },
    input:{
        borderTopColor:"#e5e5e5",
        borderTopWidth:1,
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textInput:{
        height:30,
        width:(width * 0.85),
        color:"#e8e8e8",
    },
    msgAction:{
        height:29,
        width:29,
        marginTop:13
    }
});

function mapStateToProps(state){
    return{
        username:state.user.name
    };
}

export default connect(mapStateToProps)(MessageView);