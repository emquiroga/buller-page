import {
  MobileImage,
  ImgContainer,
  MainMob,
  MainText,
  MainTitle,
} from "./style";
import FabricaMobile from "assets/fabrica-mobile.png";
import Canillas from "assets/canillas.png";
import Pinta from "assets/pinta.png";

const MainMobile = ({ content }) => {
  const imgSlide = [FabricaMobile, Canillas, Pinta];
  const { title, p1, p2 } = content;
  return (
    <MainMob>
      <MainTitle>{title}</MainTitle>
      <ImgContainer>
        {imgSlide.map((image, index) => (
          <MobileImage src={image} key={index} alt="Buller Factory" />
        ))}
      </ImgContainer>
      <MainText>{p1}</MainText>
      <MainText>{p2}</MainText>
    </MainMob>
  );
};

export default MainMobile;
