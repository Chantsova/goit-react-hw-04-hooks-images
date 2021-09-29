import './Searchbar.css';
import React, { useState } from 'react';
import Notiflix from 'notiflix';

export default function Searchbar({ onSubmit }) {
  const [inputName, setInputName] = useState('');

  const handleInputNameChange = event => {
    setInputName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputName.trim() === '') {
      return Notiflix.Notify.warning(
        'Please, input target text in the searching field',
      );
    }
    onSubmit(inputName);
    setInputName('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name="inputName"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputName}
          onChange={handleInputNameChange}
        />
      </form>
    </header>
  );
}
