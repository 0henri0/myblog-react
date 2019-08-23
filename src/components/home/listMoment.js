import Moment from './moment';

const images = [
  { src: 'static/img/imagegallary/1.jpg' },
  { src: 'static/img/imagegallary/2.jpg' },
  { src: 'static/img/imagegallary/3.jpg' },
  { src: 'static/img/imagegallary/4.jpg' },
  { src: 'static/img/imagegallary/5.jpg' },
  { src: 'static/img/imagegallary/6.jpg' },
  { src: ' static/img/elements/g1.jpg' },
  { src: ' static/img/elements/g2.jpg' },
  { src: ' static/img/elements/g3.jpg' },
  { src: ' static/img/elements/g4.jpg' },
  { src: ' static/img/elements/g5.jpg' },
  { src: ' static/img/elements/g6.jpg' },
  { src: ' static/img/elements/g7.jpg' },
  { src: ' static/img/elements/g8.jpg' },
];

const ListMomment = () => {
  return (
    <div className="blog_left_sidebar">
      {images.map((image, index)=>{
        return <Moment key={index} src={image.src} />
      })}
    </div>
  );
};

export default ListMomment;