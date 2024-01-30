import React from 'react';
import PhotoGallery from '../Components/PhotoGallery';
import photos from '../../public/photos.json';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Photo Gallery</h1>
      <PhotoGallery photos={photos} />
    </div>
  );
};

export default Home;