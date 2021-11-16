import ImageContainer from "components/ImageContainer/ImageContainer";
import { StyledImage } from "components/ImageContainer/style";
import { images } from "content";
import React from "react";

const Main = () => {
  return (
    <main>
      <h1>
        BULLER reúne el esfuerzo y conocimiento de tres generaciones dedicadas a
        la elaboración artesanal de cerveza.
      </h1>
      <ImageContainer />
      <p>
        Elaboramos cerveza bajo las más antiguas tradiciones pero con la
        tecnología y el gusto actual.
      </p>
      <p>
        Desarrollamos todas nuestras variedades respetando los tiempos, procesos
        y temperamento propio de cada variedad para lograr el sabor único que
        hoy es nuestro sello diferencial.
      </p>
      {images.map((image, index) => (
        <StyledImage src={image} key={index} alt="Buller Factory" />
      ))}
    </main>
  );
};

export default Main;
