import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images, onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevClick} />

      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="slide"
        onClick={() => onClick(images[currentIndex])}
        style={{ cursor: "pointer" }}
      />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNextClick} />
    </div>
  );
};