import cowsay from 'cowsay-browser';
import Layout from '../components/layouts/layout';
import React, { Component, Fragment } from 'react';

class Contact extends Component {
  cowsayHi = () => {
    return (
      <pre>{cowsay.say({ text: 'this is Contact' })}</pre>
    )
  }

  render() {
    return (
      <Fragment>
        <Layout title='this is Contact'>
          {this.cowsayHi()}
        </Layout>
      </Fragment>
    );
  }
}

export default Contact;