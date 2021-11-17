import {
  MobileImage,
  ImgContainer,
  MainMob,
  MainText,
  MainTitle,
} from "./style";
import { images } from "content";

const MainMobile = ({ content }) => {
  const { title, p1, p2 } = content;
  console.log(title);
  return (
    <MainMob>
      <MainTitle>{title}</MainTitle>
      <ImgContainer>
        {images.map((image, index) => (
          <MobileImage src={image} key={index} alt="Buller Factory" />
        ))}
      </ImgContainer>
      <MainText>{p1}</MainText>
      <MainText>{p2}</MainText>
    </MainMob>
  );
};

export default MainMobile;
