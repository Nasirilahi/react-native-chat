 
import store from '../store/configureStore';
import { addMessage } from '../actions/messageActions';

import "./UserAgent";

var io = require('socket.io-client/socket.io');

var socket = io("http://10.1.21.213:3000",{
    jsonp:false
});



socket.on('append-message', function (data) {
    store.dispatch(addMessage(data));
});

export default socket;
