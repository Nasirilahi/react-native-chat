import React, { Component } from 'react';
import {
Navigator,
StyleSheet,
View,
Text
} from 'react-native';
import Welcome from './welcome';
import ChatContainer from './chatContainer';



const ROUTES = {
     welcome:Welcome,
    chat:ChatContainer
};



export default class Main extends Component{
    constructor(){
        super();

        this.renderScene = this.renderScene.bind(this);
    }
    renderScene(route, navigator){
        // console.log(ROUTES[route.name]);
        // debugger;
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
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    }
});