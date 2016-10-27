import { USER_RECEIVE } from '../constants/actionsConstants';

const initialState ={
    name:''
};

export default function userReducer(state=initialState , action){
    switch (action.type) {
        case USER_RECEIVE:
            return {...state, name:action.text }
        
        default:
            return state ;
    }
}
