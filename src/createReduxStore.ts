import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

const handleChange = () => {
  // console.log('Redux state changed');
  // console.log(store.getState());
  const currentState = store.getState();
  if (currentState.isLoggedIn) {
  } else {
  }
}
store.subscribe(handleChange);

export { store };
