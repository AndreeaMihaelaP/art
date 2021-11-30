import React from "react";
import "styles/gallery.css";

export const CardImage = ({ image, title, buttonName }) => {
  return (
    <div className="image">
      <img src={image} alt="CardImage" />
      <div className="details">
        <h2>{title}</h2>
        <div class="more">
          <a href="/category" class="read-more">
            {buttonName ? buttonName : "See More"}
          </a>
        </div>
      </div>
    </div>
  );
};
