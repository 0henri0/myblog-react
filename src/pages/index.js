import Layout from '../components/layouts/layout';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      momments: {}
    };
  }

  componentDidMount() {
    getMoments()
      .then(res => {
        this.setState({
          momments: res.data.momments,
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