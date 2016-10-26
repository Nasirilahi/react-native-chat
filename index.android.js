/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import  { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import {store} from './src/store/configureStore';
import Main from './src/components/main';


const App = () => (
    <Provider store={store}>
        <Main />
    </Provider>
)

 
AppRegistry.registerComponent('RNChatApp', () => App);
