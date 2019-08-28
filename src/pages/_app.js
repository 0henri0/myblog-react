import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import Store from '../redux/store';

class MyApp extends App {

  render() {
    console.log(process.env.REACT_APP_APP_NAME);
    const store = Store();
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;