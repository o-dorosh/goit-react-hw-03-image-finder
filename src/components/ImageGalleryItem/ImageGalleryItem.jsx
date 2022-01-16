// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {};

  render() {
    console.log(this.props.imageInfo);
    return (
      <li id={this.props.id} className={s.image_gallery__item__image}>
        <img src={this.props.imageInfo.largeImageURL} alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
