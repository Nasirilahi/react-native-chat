/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import  { AppRegistry } from 'react-native';

/*
* Redux create state tree of the applicaation, Provider will provide store from redux state tree to main component.
* */

import { Provider } from 'react-redux';

/**
 * We have configured store. Mainly it is used for applying middlewares to application and then
 * binding state from reducers to these middlewares and then these combined state is given to provider
 * now provider will be able to provide this application state to parent compoenent.
 */

import store from './src/store/configureStore';
import Main from './src/components/main';


const App = () => (
    <Provider store={store}>
        <Main />
    </Provider>
)

 
AppRegistry.registerComponent('RNChatApp', () => App);