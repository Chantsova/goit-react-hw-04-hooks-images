import './App.css';
import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Button from './components/Button/Button';
import api from './services/api.jsx';

export default function App() {
  const [inputName, setInputName] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const [page, setPage] = useState(1);
  const [newImages, setNewImages] = useState(null);
  const [onLoading, setOnLoading] = useState(false);

  useEffect(() => {
    const smoothScroll = () => {
      if (page !== 1) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    };

    const fetchArticles = () => {
      if (inputName === '') {
        return;
      }

      setOnLoading(true);

      api(inputName, page)
        .then(hits => {
          setImages(state => [...state, ...hits]);
          setNewImages(hits.length);
          setStatus('resolved');
        })
        .then(smoothScroll)
        .catch(error => {
          setError(error);
          setStatus('rejected');
        })
        .finally(() => setOnLoading(false));
    };

    fetchArticles();
  }, [inputName, page]);

  const onChangeInputName = inputName => {
    setInputName(inputName);
    setPage(1);
    setImages([]);
    setNewImages(null);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    setOnLoading(true);
  };

  return (
    <>
      <Searchbar onSubmit={onChangeInputName} />

      <div className="content">
        <ImageGallery
          inputName={inputName}
          error={error}
          images={images}
          status={status}
        />
      </div>

      <Button
        handleLoadMore={handleLoadMore}
        onLoading={onLoading}
        status={status}
        newImages={newImages}
      />
    </>
  );
}
