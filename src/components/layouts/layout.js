/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import Head from './head';
import Header from './header';
import Footer from './footer';
import { Fragment } from 'react';

export default ({ children, title = 'This is the default title' }) => (
  <Fragment>
    <Head title = {title}/>
    <Header />
    {children}
    <Footer />
  </Fragment>
);