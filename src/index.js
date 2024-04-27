import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { store } from './store/store';
import { Provider } from 'react-redux';
import SigninRegister from '../src/pages/signIn-Register.js'
import Header from './components/elements/Header';

ReactDOM.render(
  <Provider store={store}>
    {/* <Header />
    <App /> */}
    <SigninRegister/>
  </Provider>,
  document.getElementById('root')
);
