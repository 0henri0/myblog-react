import React, { useState, useEffect } from 'react';
import ImageGallary from './imageGallary';
import Carousel, { ModalGateway, Modal } from 'react-images';

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

class ListImageGallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }
  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }
  render() {
    return (
      <div className="section-top-border">
        <h3 className="title_color" style={{ textAlign: "center" }}>Image Gallery</h3>
        <div className="row gallery-item">
          {images.map}
          <ImageGallary src='static/img/imagegallary/1.jpg' />
          <ImageGallary src='static/img/imagegallary/2.jpg' onClick={this.toggleModal} />
          <ImageGallary src='static/img/imagegallary/3.jpg' onClick={this.toggleModal} />
          <ImageGallary src='static/img/elements/g2.jpg' onClick={this.toggleModal} />
          <ImageGallary src='static/img/imagegallary/5.jpg' onClick={this.toggleModal} />
          <ImageGallary src='static/img/elements/g5.jpg' onClick={this.toggleModal} />
          <ImageGallary src='static/img/imagegallary/2.jpg' onClick={this.toggleModal} />
          <ImageGallary src='static/img/imagegallary/3.jpg' onClick={this.toggleModal} />
          <ImageGallary src='static/img/imagegallary/4.jpg' onClick={this.toggleModal} />
          <ImageGallary src='static/img/elements/g2.jpg' onClick={this.toggleModal} />
          <ImageGallary src='static/img/imagegallary/5.jpg' />
          <ImageGallary src='static/img/elements/g2.jpg' />
          <ImageGallary src='static/img/imagegallary/5.jpg' />
          <ImageGallary src='static/img/elements/g3.jpg' />
          <ImageGallary src='static/img/imagegallary/5.jpg' />
          <ImageGallary src='static/img/imagegallary/5.jpg' />
          <ImageGallary src='static/img/elements/g1.jpg' />
          <ImageGallary src='static/img/imagegallary/5.jpg' />
          <ImageGallary src='static/img/imagegallary/5.jpg' />
          <ModalGateway>
            {this.state.modalIsOpen ? (
              <Modal onClose={this.toggleModal}
                allowFullscreen={false}
                styles={{
                  blanket: base => ({
                    ...base,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                  }),
                  dialog: base => ({
                    ...base,
                    width: 800,
                  }),
                }}>
                <Carousel views={images}
                  styles={{
                    footer: base => ({
                      ...base,
                      background: 'none !important',
                      color: '#666',
                      padding: 0,
                      paddingTop: 20,
                      position: 'static',
                      '& a': {
                        color: 'black',
                      },
                    }),
                    header: base => ({
                      ...base,
                      background: 'none !important',
                      padding: 0,
                      paddingBottom: 10,
                      position: 'static',
                    }),
                    headerClose: base => ({
                      ...base,
                      color: '#666',
                      ':hover': { color: '#DE350B' },
                    }),
                    view: base => ({
                      ...base,
                      with: 480,
                      overflow: 'hidden',
                    }),
                  }} />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    );
  }
}

export default ListImageGallary;
