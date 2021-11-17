import { MainText, MainTitle } from "components/MainMobile/style";
import React from "react";
import { Column, DeskImage, MainDesk } from "./style";
import Fabrica from "assets/fabrica.jpg";
import Canillas from "assets/canillas.png";
import Pinta from "assets/pinta.png";

const MainDesktop = ({ content }) => {
  const { title, p1, p2 } = content;
  return (
    <MainDesk>
      <Column>
        <MainTitle>{title}</MainTitle>
        <MainText>{p1}</MainText>
        <MainText>{p2}</MainText>
        <DeskImage src={Fabrica} alt="" />
      </Column>
      <Column>
        <DeskImage src={Canillas} alt="" />
        <DeskImage src={Pinta} alt="" />
      </Column>
    </MainDesk>
  );
};

export default MainDesktop;
