import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, StyleSheet,TouchableHighlight, } from 'react-native';
// import { Button } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { receiverUser } from '../actions/userActions'

const { width } = Dimensions.get('window');

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state ={
            text:''
        }

        this.onPress = this.onPress.bind(this);
    }

    /***
     * handler to send to chat view.
     */

    onPress(){
        if(this.state.text.trim() !==''){
            this.props.receiveUser(this.state.text);
            this.props.navigator.push({ name: 'chat' });
            this.setState({text:''});
        }

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={{backgroundColor:"#FF9800",alignItems:'center',justifyContent:'center', height:200, width:200, borderRadius:100}}>
                        <Text style={{fontSize:35,textShadowOffset:{width:15,height:15}, fontStyle :'italic',textShadowColor:"#9E9E9E"}}> Chit Chat</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View>
                        <TextInput
                        style={styles.textInput}
                        placeholder={this.state.text}
                        underlineColorAndroid="rgba(0,0,0,0.0)"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                         />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight style={styles.buttonView} onPress={this.onPress}>
                            <Text style={styles.buttonText}>{'Proceed'}</Text>
                        </TouchableHighlight>
                    </View>
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
    },
    inputContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#616161',
        paddingTop:30
    },
    topContainer:{
        flex:1,
        backgroundColor:'#212121',
        alignItems:'center',
        justifyContent:'center'
    },
    textInput:{
        borderColor: '#FF9800',
        backgroundColor:'#EEEEEE', 
        borderWidth: 1,
        borderRadius:10,
        height:40,
        width:width-30,
        paddingLeft:10
    },
    buttonContainer:{
        flex:1,
        marginVertical:10,
        alignItems:'center'
    },
    buttonView: {
        width:width-30,
        backgroundColor:'#FF9800',
        paddingVertical:10,
        alignItems:'center',
        borderRadius:10,
    },
    buttonText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    },
})

/**
 * connect function take two functions as arguments first to take store state values second to dispatch actions method. 
 * */

function mapDispatchToProps(dispatch){
    return {
        receiveUser:bindActionCreators(receiverUser, dispatch)
    };
}

/**
 * connect a react component to redux store.
 * */
export default connect(null, mapDispatchToProps)(Welcome);