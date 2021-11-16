import { images } from "content";
import React from "react";
import { StyledContainer, StyledImage } from "./style";

const ImageContainer = () => {
  return (
    <StyledContainer>
      {images.map((image, index) => (
        <StyledImage src={image} key={index} alt="Buller Factory" />
      ))}
    </StyledContainer>
  );
};

export default ImageContainer;
