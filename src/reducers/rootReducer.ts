
// import { combineReducers } from 'redux';
// import simpleReducer from './simpleReducer';
// import isLoggedIn from './isLoggedInReducer';
// import userData from './userDataReducer';
import { USER_LOGIN, MODAL_VISIBLE, MODAL_NAME, USER_DATA, GLOBAL_INTERESTS, USER_INTERESTS, LOCATION_ACCESS } from '../actions/acion-types';
import { IState } from '../types/IState';

const initialState: IState = {
    isLoggedIn: false,
    modalOpts: {
        visible: false,
        name: ''
    },
    locationAccess: false
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, 
                {
                    isLoggedIn: action.payload
                });
        case MODAL_VISIBLE:
            return Object.assign({}, state,
                {
                    modalOpts: {
                        visible: action.payload
                    }
                });
        case MODAL_NAME:
            return Object.assign({}, state,
                {
                    modalOpts: {
                        name: action.payload
                    }
                });
        case USER_DATA:
            return Object.assign({}, state, 
                {
                    userData: {
                        user: action.payload.data,
                        token: action.payload.token
                    } 
                });
        case GLOBAL_INTERESTS:
            return Object.assign({}, state,
            {
                interests: action.payload
            })
        case USER_INTERESTS:
            return Object.assign({}, state,
            {
                interests: action.payload
            })
        case LOCATION_ACCESS:
            return Object.assign({} , state,
            {
                locationAccess: action.payload
            })
        default:
            return state;
    }
}
// export default combineReducers({
//  simpleReducer,
//  isLoggedIn,
//  userData,
//  modalVisible: (initial = false, action) => {
//      switch (action) {
//         case 'SOMETHING':
//             console.log(initial);
//             console.warn(action);
//             return true;
//         default:
//         console.log(action);
//             return false;
//      }
//  }
// });