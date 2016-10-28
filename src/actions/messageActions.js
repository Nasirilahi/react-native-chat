import { ADD_MESSAGE } from '../constants/actionsConstants';


export function addMessage(data){
	return{
		type:ADD_MESSAGE,
		data
	}
}