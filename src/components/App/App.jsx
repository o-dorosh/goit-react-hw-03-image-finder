import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
// import Filter from '../Filter/Filter';

// import s from './App.module.css';

class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    console.log(imageName);
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
      </>
    );
  }
}

export default App;
