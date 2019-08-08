import cowsay from 'cowsay-browser';
import Layout from '../components/layouts/layout';
import React, { Component, Fragment } from 'react';

class About extends Component {
  cowsayHi = () => {
    return (
      <pre>{cowsay.say({ text: 'this is home' })}</pre>
    )
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

export default About;