import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { IState } from './types/IState';

const store = createStore(
  rootReducer,
  {
    isLoggedIn: false,
    userData: {},
    modalVisible: false
  },
  applyMiddleware(thunk)
);

// store.dispatch({
//   isLoggedIn: false,
//   userData: {}
// });

export { store };
