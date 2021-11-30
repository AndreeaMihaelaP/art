import React, { useState } from "react";
import { LightBox } from "react-lightbox-pack"; // <--- Importing LightBox Pack
import "react-lightbox-pack/dist/index.css";

import { CardCategoryImage } from "components/CardCategoryImage";

import img1 from "assets/background1.jpg";
import img2 from "assets/fetita.jpg";
import img3 from "assets/background3.jpg";
import img4 from "assets/background4.jpg";
import img5 from "assets/background5.jpg";
import img6 from "assets/portret.jpg";

const categories = [
  {
    id: 1,
    image: img1,
    name: "Delta",
    alt: "Alt image",
    technique: "Acrylic",
    size: "320x240",
  },
  {
    id: 2,
    image: img2,
    name: "Fetita",
    alt: "Alt image",
    technique: "Acrylic",
    size: "320x240",
  },
  {
    id: 2,
    image: img3,
    name: "Delta1",
    alt: "Alt image",
    technique: "Oil",
    size: "320x240",
  },
  {
    id: 4,
    image: img4,
    name: "Deltaa",
    alt: "Alt image",
    technique: "Oil",
    size: "320x240",
  },
  {
    id: 5,
    image: img5,
    name: "Delta",
    alt: "Alt image",
    technique: "Oil",
    size: "320x240",
  },
  {
    id: 6,
    image: img6,
    name: "Delta",
    alt: "Alt image",
    technique: "Oil",
    size: "320x240",
  },
];

const Category = () => {
  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);

  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  return (
    <div className="category-container">
      <h3 className="category-title">
        <p>Portraits</p>
      </h3>
      <div className="category-img-flex">
        {categories.map((element, index) => (
          <CardCategoryImage
            key={index}
            image={element.image}
            name={element.name}
            technique={element.technique}
            size={element.size}
            alt={element.alt}
            handleImage={() => {
              lightBoxHandler(true, index);
            }}
          />
        ))}

        <LightBox
          state={toggle}
          event={lightBoxHandler}
          data={categories}
          imageWidth="60vw"
          imageHeight="70vh"
          thumbnailHeight={50}
          thumbnailWidth={50}
          setImageIndex={setSIndex}
          imageIndex={sIndex}
        />
      </div>
    </div>
  );
};

export default Category;
