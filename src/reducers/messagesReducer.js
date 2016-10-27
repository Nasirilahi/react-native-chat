import { ADD_MESSAGE } from '../constants/actionsConstants';

const initialState = {
    messages:[],
    time:''
}
 

export default function messagesReducer(state = initialState , action){
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages:messaages.concat(action.data.message), time:action.data.time  };
          // let newMessage = Object.assign({}, action.data);
          // return state.concat([newMessage]);
      
        default:
            return state ;
    }
}
