import React, { useState } from 'react';
import "./Category.css";
import Api from '../assets/api.json';

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
   
    if(Api.length-8==currentIndex) return false;
    setCurrentIndex(currentIndex + 3)
    console.log(currentIndex)
  };

  const handlePrev = () => {
    if(currentIndex==0) return false;
    setCurrentIndex(currentIndex - 3)
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <div className="p-2 border rounded-circle mx-3">
          <i className="fa-solid fa-arrow-left" onClick={handlePrev}></i>
        </div>
        <div className="p-2 border rounded-circle">
          <i className="fa-solid fa-arrow-right" onClick={handleNext}></i>
        </div>
      </div>
      <div className="image-container">
        {Api.map((e, index) => (
          <div
            className="image-item"
            key={e.id}
            style={{
              transform: `translateX(-${currentIndex * 105}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <img src={e.image} alt={`Image ${e.id}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
