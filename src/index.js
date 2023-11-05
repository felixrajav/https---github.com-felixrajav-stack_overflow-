import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client' for React 18.
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById('root')); // Create a root using createRoot.

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
