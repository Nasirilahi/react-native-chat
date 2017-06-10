 
import store from '../store/configureStore';
import { addMessage } from '../actions/messageActions';

import "./UserAgent";

var io = require('socket.io-client');

var socket = io("http://192.168.43.47:3000",{
    jsonp:false
});



socket.on('append-message', function (data) {
    store.dispatch(addMessage(data));
});

export default socket;
