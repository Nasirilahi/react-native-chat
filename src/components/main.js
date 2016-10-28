import React, { Component } from 'react';
import {
Navigator,
StyleSheet,
View,
Text
} from 'react-native';

import Welcome from './welcome';
import ChatContainer from './chatContainer';


/**
 * We can put all components who will be views in application in to a constants object
 * then simply pass the name as a key to this object to render a particular page.
 * Another way we can use switch case in renderScene function to render the particular view.
 * */
const ROUTES = {
     welcome:Welcome,
    chat:ChatContainer
};

/**
 * This component is responsible only for navigation.
 * */

export default class Main extends Component{
    constructor(){
        super();

        /**
         * In es6 we have to bind all handler function, otherwise it will be undefined in application.
         * In es5 it is done automatically.
         * */

        this.renderScene = this.renderScene.bind(this);
    }

    /**
     *  render scene function use in Navigator component to tell which view is to be render.
     * */

    renderScene(route, navigator){
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

/**
 * styling for this component.
 * */

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});