import './ImageGallery.css';
import { useState } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';

export default function ImageGallery({ status, error, images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = largeImageURL => {
    setSelectedImage(largeImageURL);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {status === 'rejected' && <h1 className="error">{error.message}</h1>}
      {status === 'resolved' && (
        <ul className="ImageGallery">
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              key={webformatURL}
              handleSelectImage={handleSelectImage}
            />
          ))}
        </ul>
      )}

      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}
