import BlogLeftSidebar from './blogLeftSidebar';
import BlogRightSidebar from './blogRightSidebar';

const blogArea = () => {
  return (
    <section className="blog_area p_120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogLeftSidebar />
          </div>
          <div className="col-lg-4">
            <BlogRightSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default blogArea;