import Head from './head'
import Header from './header'
import Footer from './footer'
import { Fragment } from 'react';

export default ({ children, title = 'This is the default title' }) => (
  <Fragment>
    <Head title = {title}/>
    <Header />
    {children}
    <Footer />
  </Fragment>
)