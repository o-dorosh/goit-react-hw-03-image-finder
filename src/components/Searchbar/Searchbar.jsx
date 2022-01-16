// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imageName.trim() === '') {
      alert('Searchbar is empty');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.handleSubmit} className={s.search__form}>
          <button type="submit" className={s.search__form__button}>
            <span className={s.search__form__button__label}>Search</span>
          </button>

          <input
            className={s.search__form__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
