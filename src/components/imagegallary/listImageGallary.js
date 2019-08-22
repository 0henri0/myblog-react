import ImageGallary from './imageGallary';
const ListImageGallary = () => {
  return (
    <div className="section-top-border">
      <h3 className="title_color" style={{ textAlign: "center"}}>Image Gallery</h3>
      <div className="row gallery-item">
        <ImageGallary src='static/img/imagegallary/1.jpg'/>
        <ImageGallary src='static/img/imagegallary/2.jpg'/>
        <ImageGallary src='static/img/imagegallary/3.jpg'/>
        <ImageGallary src='static/img/elements/g2.jpg'/>
        <ImageGallary src='static/img/imagegallary/5.jpg'/>
        <ImageGallary src='static/img/elements/g5.jpg'/>
        <ImageGallary src='static/img/imagegallary/2.jpg'/>
        <ImageGallary src='static/img/imagegallary/3.jpg'/>
        <ImageGallary src='static/img/imagegallary/4.jpg'/>
        <ImageGallary src='static/img/elements/g2.jpg'/>
        <ImageGallary src='static/img/imagegallary/5.jpg'/>
        <ImageGallary src='static/img/elements/g2.jpg'/>
        <ImageGallary src='static/img/imagegallary/5.jpg'/>
        <ImageGallary src='static/img/elements/g3.jpg'/>
        <ImageGallary src='static/img/imagegallary/5.jpg'/>
        <ImageGallary src='static/img/imagegallary/5.jpg'/>
        <ImageGallary src='static/img/elements/g1.jpg'/>
        <ImageGallary src='static/img/imagegallary/5.jpg'/>
        <ImageGallary src='static/img/imagegallary/5.jpg'/>
      </div>
    </div>
  );
};

export default ListImageGallary;

