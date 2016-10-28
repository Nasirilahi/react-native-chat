import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import InputContainer from './inputContainer';
import ChatView from './chatView';
import Header from './header';

class ChatContainer extends Component{

    constructor(){
        super();
    }

    render(){

        return(
           <View style={styles.container} >
               <View style={styles.headerContainer}>
                   <Header />
               </View>
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

/**
 * Styling to this component.
 * */
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#37474F'
    },
    inputContainer:{
        flex:1,
    },
    messageContianer:{
        flex:8,
        margin:10
    },
    headerContainer:{
        flex:1,
    }
});


/**
 * connect function take two functions as arguments first to take store state values second to dispatch actions method.
 * */

function mapStateToProps(state){
    return{
        user:state.user
    };
}



/**
 * connect a react component to redux store.
 * */

export default connect(mapStateToProps)(ChatContainer);