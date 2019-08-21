import Layout from '../components/layouts/layout';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getMoments from '../services/home';
import Banner from '../components/home/banner';
import BlogArea from '../components/commons/blogArea';
import ListMoment from '../components/home/listMoment';
import BlogRightSidebar from '../components/commons/blogRightSidebar';

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
      <Layout title='this is home'>
        <BlogArea>
          <div className="row">
            <div className="col-lg-8">
              <ListMoment />
            </div>
            <div className="col-lg-4">
              <BlogRightSidebar />
            </div>
          </div>
          <nav class="blog-pagination justify-content-center d-flex">
		                        <ul class="pagination">
		                            <li class="page-item">
		                                <a href="#" class="page-link" aria-label="Previous">
		                                    <span aria-hidden="true">
		                                        <span class="lnr lnr-chevron-left"></span>
		                                    </span>
		                                </a>
		                            </li>
		                            <li class="page-item"><a href="#" class="page-link">01</a></li>
		                            <li class="page-item active"><a href="#" class="page-link">02</a></li>
		                            <li class="page-item"><a href="#" class="page-link">03</a></li>
		                            <li class="page-item"><a href="#" class="page-link">04</a></li>
		                            <li class="page-item"><a href="#" class="page-link">09</a></li>
		                            <li class="page-item">
		                                <a href="#" class="page-link" aria-label="Next">
		                                    <span aria-hidden="true">
		                                        <span class="lnr lnr-chevron-right"></span>
		                                    </span>
		                                </a>
		                            </li>
		                        </ul>
		                    </nav>
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