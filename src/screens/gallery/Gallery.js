import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { CardImage } from "components/gallery/CardImage";

import "../../styles/gallery.css";
import img1 from "assets/fetita.jpg";
import img2 from "assets/stat.jpg";
import img3 from "assets/abstract.jpg";
import img4 from "assets/sarmisegetusa.jpeg";
import img5 from "assets/icoana.jpg";

const Gallery = () => {
  useEffect(() => {
    console.log("mount");
  }, []);
  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h3 className="gallery-description">
          Welcome to the gallery.
          <p>
            Every painting is a story of healing, of seeking "love-tings" and
            "comfort-tings."
          </p>
        </h3>
        <Container>
          <Row>
            <Col>
              <CardImage image={img1} title="Portraits" />
            </Col>
            <Col>
              <CardImage image={img2} title="Static Nature" />
            </Col>
            <Col>
              <CardImage image={img5} title="Icons" />
            </Col>
          </Row>
          <Row>
            <Col>
              <CardImage image={img4} title="Landscapes" />
            </Col>
            <Col>
              <CardImage image={img3} title="Abstract" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Gallery;
