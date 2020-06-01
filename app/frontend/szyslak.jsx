import React from 'react';
import ReactDOM from 'react-dom';

import Root from '../frontend/components/root';

import configureStore from '../frontend/store/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});