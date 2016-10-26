import { ADD_MESSAGE } from '../constants/actionsConstants';


 

export default function messagesReducer(state , action){
    switch (action.type) {
        case ADD_MESSAGE:

          let newMessage = Object.assign({}, action.data);
          return state.concat([newMessage]);
      
        default:
            return state || [];
    }
}
