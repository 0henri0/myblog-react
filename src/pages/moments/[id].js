import cowsay from 'cowsay-browser';
import Layout from '../../components/layouts/layout';
import BlogArea from '../../components/commons/blogArea';
import MomentDetailComponent from '../../components/moments/momentDetailComponent';
const MomentDetail = () => {
    return (
        <Layout title='this is MomentDetail'>
            <BlogArea p='p_100'>
            <div className="row  d-flex justify-content-center">
            <div className="col-lg-9 col-md-12">
              <MomentDetailComponent />
            </div>
          </div>
            </BlogArea>

        </Layout>
    );
};

export default MomentDetail;