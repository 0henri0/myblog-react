const ImageGallary = ({ src }) => {
  return (
    <div class=' col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center'>
      <img className ="single-gallery-image" src={ src } style = {{ width: '350px', height: '250px'}}/>
      {/* <a href={ href } className="img-gal"><div className="single-gallery-image" style={{ backgroundImage: `url(${href})` }}></div></a> */}
    </div>
  );
};

export default ImageGallary;