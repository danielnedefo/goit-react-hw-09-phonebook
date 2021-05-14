import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import store from './Components/redux/store'
import {Provider} from 'react-redux'
console.log(store)
// store.dispatch(myAction)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
    <PersistGate persistor={store.persistor}>
      <App />
      </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
