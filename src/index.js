import '@app/styles/wg.css';
import '@app/styles/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '@app/containers/App';
import configureStore from '@app/store/configureStore';

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    rootElement,
  );
}
