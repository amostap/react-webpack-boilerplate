import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import configureStore from 'store/configureStore';
import 'styles/styles.css';
import App from 'layouts';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LocaleProvider locale={enUS}>
        <Route component={App} />
      </LocaleProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('container')
);
