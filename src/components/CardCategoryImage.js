import React from "react";

import "styles/category.css";

export const CardCategoryImage = ({
  image,
  name = "",
  technique = "",
  size = "",
  alt = "Alt image",
  handleImage,
}) => {
  return (
    <div className="category-container">
      <figure class="category-img-container">
        <img src={image} alt={alt} onClick={handleImage} />
        <figcaption>
          <h2> {name} </h2>
          <p>{technique}</p>
          <p>{size}</p>
          {/* <a href="/home"></a> */}
        </figcaption>
      </figure>
    </div>
  );
};
