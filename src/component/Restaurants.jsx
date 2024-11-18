import React from 'react';

const Restaurants = ({ data, Cities }) => {
  return (
    <>
      {Cities.map((city) => (
        <button className="btn border p-2 m-3" key={city}>
          {data} {city}
        </button>
      ))}
    </>
  );
};

export default Restaurants;
