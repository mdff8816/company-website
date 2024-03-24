import React from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full border border-solid hover:border-green-500 rounded-md transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
