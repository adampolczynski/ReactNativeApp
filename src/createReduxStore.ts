import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { IState } from './types/IState';
import { IUserData } from './types/IUserData';


const userData: IUserData = {
  user: null,
  token: 'adssadasd'
}

const store = createStore(
    rootReducer,
    
    applyMiddleware(thunk)
  );

const handleChange = () => {
  console.log('Redux state changed');
  const currentState = store.getState();
  if (currentState.isLoggedIn) {
    console.log('Logged in!');
  } else {
    console.log('Logged out!');
  }
}
store.subscribe(handleChange);

// store.dispatch({
//   isLoggedIn: false,
//   userData: {}
// });

export { store };
