import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";

import img1 from "./assets/bugatti.avif";
import img2 from "./assets/koenigsegg.avif";
import img3 from "./assets/pagani.jpg";
import img4 from "./assets/ferrari.jpg";
import img5 from "./assets/mclaren.webp";

const ImageCarousel = () => {
  const baseImages = [img1, img2, img3, img4, img5];
  const images = [...baseImages, baseImages[0]]; // duplicate first for looping

  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Looping logic
  useEffect(() => {
    if (index === images.length - 1) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(0); // snap back to first slide
      }, 500); // match CSS transition duration

      const reenable = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);

      return () => {
        clearTimeout(timeout);
        clearTimeout(reenable);
      };
    }
  }, [index, images.length]);

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Image Carousel</h1>

      <div className="carousel">
        <div
          className="carousel-container"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${(index * 100) / images.length}%)`,
            transition: transitionEnabled ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {images.map((img, i) => (
            <div className="carousel-slide" key={i}>
              <img src={img} alt={`Slide ${i + 1}`} className="carousel-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
