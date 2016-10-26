 
import store from '../store/configureStore';
import { addMessage } from '../actions/messageActions';
//import { SocketIO } from 'react-native-socketio';

//const socket = io('localhost:3000');
//var socket = new SocketIO('localhost:3000');
socket.connect();
socket.on('connect',() => {
    console.log('connected to server');
});

socket.on('append-message', function (data) {
	
    store.dispatch(addMessage(data));
});

export default socket;
