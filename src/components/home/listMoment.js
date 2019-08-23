import Moment from './moment';
import { map } from 'lodash';

const ListMomment = ({ momments }) => {
  return (
    <div className="blog_left_sidebar">
      { map(momments, function(momment, index) {
        return <Moment key={index} src={momment.url_image} />;
      })
      }
    </div>
  );
};

export default ListMomment;