import { sliderContent } from "content";
import {
  ButtonWrapper,
  Container,
  Content,
  ContentWrapper,
  SliderButton,
  SliderLink,
} from "./style";
import { useSlider } from "hooks/useSlider";

const AboutSlider = () => {
  const { activeSlide, nextSlide, prevSlide } = useSlider();
  return (
    <>
      <Container>
        <ButtonWrapper>
          <SliderButton onClick={prevSlide}>&lt;</SliderButton>
          <SliderButton onClick={nextSlide}>&gt;</SliderButton>
        </ButtonWrapper>
        <ContentWrapper>
          {sliderContent.map((slide, index) => {
            return (
              <div
                key={index}
                className={index === activeSlide ? "slide-active" : "slide"}
              >
                {index === activeSlide && <Content>{slide}</Content>}
              </div>
            );
          })}
          <SliderLink>Ver más...</SliderLink>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default AboutSlider;
