import './ImageGalleryItem.css';

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  handleSelectImage,
}) => (
  <li
    className="ImageGalleryItem"
    onClick={() => handleSelectImage(largeImageURL)}
  >
    <img src={webformatURL} alt={id} className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;
