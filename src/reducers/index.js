import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    messages: messagesReducer,
    user: userReducer
});

export default rootReducer;