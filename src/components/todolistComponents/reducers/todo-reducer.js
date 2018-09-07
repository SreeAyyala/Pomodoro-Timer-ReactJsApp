import {combineReducers} from 'redux';

    const todoReducer =(state=[],action)=>{
        switch(action.type){
            case 'ADD_TASK':
                state = state.concat(action.payload);
                break;
            case 'DELETE_TASK':
                state = state.slice();
                state.splice(action.payload,1);
                break;
            default:
            return state 
        }
        return state;
    },
    reducers = combineReducers({
        tasks:todoReducer
    });

    export default reducers;