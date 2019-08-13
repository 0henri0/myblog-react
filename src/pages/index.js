import Layout from '../components/layouts/layout';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import getMoments from '../services/home';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      momments: {}
    };
  }

  UNSAFE_componentWillMount() {
    getMoments()
      .then(res => {
        this.setState({
          momments: res.data.mommetsArray,
        });
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Layout title='this is home'>

        </Layout>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    moments: state.momments.items
  };
};

export default connect(mapStateToProps)(Index);