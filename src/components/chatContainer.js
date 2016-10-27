import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import InputContainer from './inputContainer';
import ChatView from './chatView';

class ChatContainer extends Component{
    constructor(){
        super();

    }

    render(){


        return(
           <View style={styles.container} >
              <View style={styles.messageContianer}>
                <ChatView />
              </View>
               <View style={styles.inputContainer}>
                   <InputContainer socket={ this.socket } />
               </View>
           </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#26A69A'
    },
    inputContainer:{
        flex:1,
    },
    messageContianer:{
        flex:9,
        margin:10
    }
});


function mapStateToProps(state){
    return{
        user:state.user
    };
}


export default connect(mapStateToProps)(ChatContainer);