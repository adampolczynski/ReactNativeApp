
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import isLoggedIn from './isLoggedInReducer';
import userData from './userDataReducer';

export default combineReducers({
 simpleReducer,
 isLoggedIn,
 userData,
 modalVisible: (initial = false, action) => {
     switch (action) {
        case 'SOMETHING':
            console.log(initial);
            console.warn(action);
            return {
                result: action.payload
            }
        default:
        console.log(action);
            return initial;
     }
 }
});