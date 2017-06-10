import React, { Component } from 'react';
import {
StyleSheet,
View,
Text
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Welcome from './welcome';
import ChatContainer from './chatContainer';

const ROUTES = {
     welcome:Welcome,
    chat:ChatContainer
};

/**
 * This component is responsible only for navigation.
 * */
export default class Main extends Component{
    renderScene = (route, navigator) =>{
        var Component = ROUTES[route.name];
        return <Component route={route} navigator={navigator} />;
    }

    render(){
        return(
                <Navigator
                    style={{}}
                    initialRoute={{ name:'welcome' }}
                    renderScene={this.renderScene}
                    configureScene={()=> { return Navigator.SceneConfigs.FloatFromRight}}

                />
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});