import cowsay from 'cowsay-browser';
import Layout from '../components/layouts/layout';
import React, { Component, Fragment } from 'react';

class Index extends Component {
  cowsayHi = () => {
    return (
      <pre>{cowsay.say({ text: 'hi there!' })}</pre>
    );
  }
  render() {
    return (
      <Fragment>
        <Layout title='this is home'>
          {this.cowsayHi()}
        </Layout>
      </Fragment>
    );
  }
}

export default Index;