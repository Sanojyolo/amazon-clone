import React, { useEffect, useState } from "react";
import "./Productcard.css";

const Productcard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  let hoverTimer;

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimer);
    };
  }, []);

  const handleMouseEnter = () => {
    hoverTimer = setTimeout(() => {
      setIsHovered(true);
      setShowDescription(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
    setIsHovered(false);
    setShowDescription(false);
  };
  return (
    <div>
      <div
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={item.image} alt={item.title} className="image-width" />
        <h3>{item.title}</h3>
        <p className="price">${item.price}</p>
        <p className="price">Rating: {item.rating.rate}</p>
        {isHovered && <p>{item.description}</p>}
        <p>
          <button style={{ backgroundColor: "#ffcc00" }}>Add to Cart</button>
        </p>
        <p>
          <button style={{ backgroundColor: "#ff9900" }}>Buy Now</button>
        </p>
      </div>
    </div>
  );
};

export default Productcard;
