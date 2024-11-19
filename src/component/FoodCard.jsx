import React from 'react';

const FoodCard = ({ items, rating, time, city }) => {
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-center" style={{ height: "", flexWrap: "wrap" }}>
        {items.map((i) => (
          <div key={i.idMeal} className="card" style={{ width: "18rem", position: "relative", border: "none", margin: "10px" }}>
            <div style={{ position: "relative" }}>
              <img
                src={i.strMealThumb}
                className="card-img-top"
                alt="Food Image"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "50%",
                  background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  zIndex: 2,
                }}
              >
                60% OFF UPTO ₹120
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{i.strMeal}</h5>
              <p className="card-text">
                <i className="fa-solid fa-star text-success"></i>
                {rating} {time} <br /> {city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodCard;
