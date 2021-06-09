import React from 'react'
import reactDom from 'react-dom'
import { Provider } from 'react-redux'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import App from './App';
import './index.css';
import store from './store';

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

reactDom.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
        <App />
        </AlertProvider>
    </Provider>, 
    document.getElementById("root")
    );