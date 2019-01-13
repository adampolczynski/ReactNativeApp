
// import { combineReducers } from 'redux';
// import simpleReducer from './simpleReducer';
// import isLoggedIn from './isLoggedInReducer';
// import userData from './userDataReducer';
import { USER_LOGIN, MODAL_VISIBLE, MODAL_NAME, USER_DATA } from '../actions/acion-types';

const initialState = {
    isLoggedIn: false,
    modalOpts: {
        visible: true,
        name: 'WELCOME'
    },
    userData: {
        user: {
            name: 'asd',
            surname: 'asddsds',
            email: 'asdasdas'
        },
        token: 'asdasdasdasddsaas'
    }
};

export default (state = initialState, action: any) => {
    console.log('root reducer')
    console.log(JSON.stringify(initialState))
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