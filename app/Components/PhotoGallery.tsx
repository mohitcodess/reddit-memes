"use client"
import React, { useState } from "react";
import { PhotoSwipe } from "react-photoswipe-2";
import "react-photoswipe-2/lib/photoswipe.css";

interface Photo {
  src: string;
  fullSrc: string; // Add fullSrc property to Photo interface
  w: number;
  h: number;
  title: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openPhotoSwipe = (index: number) => {
    setInitialIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
      <div style={{ height: "100%" }}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.title}
            onClick={() => openPhotoSwipe(index)}
            style={{
              width: photo.w,
              height: photo.h,
              margin: 10,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <PhotoSwipe
        isOpen={isOpen}
        items={photos.map(photo => ({
          src: photo.fullSrc, // Use fullSrc for full-resolution image
          w: photo.w,
          h: photo.h,
          title: photo.title
        }))}
        options={{ index: initialIndex }}
        onClose={handleClose}
      />
    </div>
  );
};

export default PhotoGallery;
