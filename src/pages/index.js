import Layout from '../components/layouts/layout';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getMoments from '../services/home';
import Banner from '../components/home/banner';
import BlogArea from '../components/commons/blogArea';

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
        return error;
      });
  }

  render() {
    return (
      <Layout title='this is home' isActived = 'active'>
          <Banner />
          <BlogArea />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    moments: state.momments.items
  };
};

export default connect(mapStateToProps)(Index);