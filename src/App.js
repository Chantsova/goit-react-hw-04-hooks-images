import './App.css';
import React, { useState } from 'react';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';

export default function App() {
  const [inputName, setInputName] = useState('');

  const handleSearchFormSubmit = inputName => {
    setInputName(inputName);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearchFormSubmit} />
      <div className="content">
        <ImageGallery inputName={inputName} />
      </div>
    </>
  );
}
