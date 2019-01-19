import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { IState } from './types/IState';
import { IUserData } from './types/IUserData';


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

const handleChange = () => {
  console.log('Redux state changed');
  const currentState = store.getState();
  if (currentState.isLoggedIn) {
  } else {
  }
}
store.subscribe(handleChange);

export { store };
