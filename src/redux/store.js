import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

export default function store() {
  // if (process.env.NODE_ENV !== 'production') {
  //   return createStore(
  //     reducer,
  //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //   );
  // }

  return createStore(reducer);
}