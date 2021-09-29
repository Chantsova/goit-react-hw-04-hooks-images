import { useEffect } from 'react';
import './Modal.css';

export default function Modal({ selectedImage, handleCloseModal }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleCloseModal, selectedImage]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      handleCloseModal();
    }
  };

  return (
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img src={selectedImage} alt="pixabay_img" />
      </div>
    </div>
  );
}
