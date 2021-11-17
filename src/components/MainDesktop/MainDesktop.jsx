import { MainText, MainTitle } from "components/MainMobile/style";
import { images } from "content";
import React from "react";
import { Column, DeskImage, MainDesk } from "./style";

const MainDesktop = ({ content }) => {
  const { title, p1, p2 } = content;
  return (
    <MainDesk>
      <Column>
        <MainTitle>{title}</MainTitle>
        <MainText>{p1}</MainText>
        <MainText>{p2}</MainText>
        <DeskImage src={images[0]} alt="" />
      </Column>
      <Column>
        <DeskImage src={images[1]} alt="" />
        <DeskImage src={images[2]} alt="" />
      </Column>
    </MainDesk>
  );
};

export default MainDesktop;
