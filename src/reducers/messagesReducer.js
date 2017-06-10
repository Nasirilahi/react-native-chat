import { ADD_MESSAGE } from '../constants/actionsConstants';

const initialState = {
    messages:[],

}
 

export default function messagesReducer(state = initialState , action){
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages:state.messages.concat(action.data)  };
          // let newMessage = Object.assign({}, action.data);
          // return state.concat([newMessage]);
      
        default:
            return state ;
    }
}
