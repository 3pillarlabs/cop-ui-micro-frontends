import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component.js';
import { Provider } from 'react-redux';
import store from '../store/store';
import '../../assets/css/App.css';

const r = () => {
return <Provider store={store}><Home/></Provider>
}

function domElementGetter() {
  return document.getElementById('react');
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent:  r,
  domElementGetter,
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
