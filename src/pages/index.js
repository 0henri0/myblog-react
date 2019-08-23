import Layout from '../components/layouts/layout';
import React from 'react';
import { connect } from 'react-redux';
import getMoments from '../services/home';
import BlogArea from '../components/commons/blogArea';
import ListMoment from '../components/home/listMoment';
import BlogRightSidebar from '../components/commons/blogRightSidebar';
import Pagination from '../components/commons/pagination';

class Index extends React.Component {
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
    const { momments } = this.state;
    return (
      <Layout title='This Is Home'>
        <BlogArea>
          <div className="row">
            <div className="col-lg-8">
              <ListMoment momments={momments} />
            </div>
            <div className="col-lg-4">
              <BlogRightSidebar />
            </div>
          </div>
          <Pagination />
        </BlogArea>
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