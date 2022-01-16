// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import API from '../../services/imageAPI';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    page: 1,
    searchResults: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    let prevName = prevProps.imageName;
    let nextName = this.props.imageName;
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      API.fetchImages(nextName)
        .then(searchResults => {
          this.setState({ searchResults, status: 'resolved' });
        })
        .catch(error => this.setState({ status: 'rejected' }));
    }
  }

  render() {
    const { status, searchResults } = this.state;

    if (status === 'idle') {
      return <ul></ul>;
    }

    if (status === 'pending') {
      console.log('Loading');
      return <Loader />;
    }

    if (status === 'rejected') {
      return <div>No results</div>;
    }

    if (status === 'resolved') {
      return (
        <ul className={s.image__gallery}>
          {searchResults &&
            searchResults.hits.map(result => (
              <ImageGalleryItem key={result.id} imageInfo={result} />
            ))}
        </ul>
      );
    }
  }
}

export default ImageGallery;
