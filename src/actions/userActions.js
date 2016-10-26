import { USER_RECEIVE } from '../constants/actionsConstants';

export function receiverUser(text){

    return{
        type: USER_RECEIVE,
        text
    }
}